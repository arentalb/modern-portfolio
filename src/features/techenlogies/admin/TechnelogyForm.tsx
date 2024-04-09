import { Input } from "@/components/common/ui/input.tsx";
import { Button } from "@/components/common/ui/button.tsx";
import { useCreateTechnology } from "@/features/techenlogies/admin/useCreateTechnology.ts";
import { useDeleteTechnology } from "@/features/techenlogies/admin/useDeleteTechnology.ts";
import { Label } from "@/components/common/ui/label.tsx";
import { useForm } from "react-hook-form";
import { useEditTechnology } from "@/features/techenlogies/admin/useEditTechnology.ts";
import { useEffect } from "react";
import { TTechnology } from "@/types/Technology.types.ts";

interface TechFormFields {
  name: string;
  image: FileList;
  isSkill: boolean;
}

interface TechnologyFormProps {
  mode: string;
  technology?: TTechnology | null;
  onSelect?: (selectedTech: TTechnology | undefined) => void;
}

export function TechnologyForm({
  mode = "normal",
  technology = null,
  onSelect,
}: TechnologyFormProps) {
  const { isCreating, createTechnology } = useCreateTechnology();
  const { isDeleting, deleteTechnology } = useDeleteTechnology();
  const { isEditing, editTechnology } = useEditTechnology();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<TechFormFields>({
    defaultValues: technology ? technology : {},
  });

  useEffect(() => {
    if (technology) {
      setValue("name", technology.name);
      setValue("isSkill", technology.isSkill);
    }
  }, [technology, setValue]);

  async function createHandler(tech: TechFormFields) {
    await createTechnology(tech);
    clearEditMode();
    clearForm();
  }

  async function editHandler(tech: TechFormFields) {
    if (technology) {
      let updatedTech: TTechnology = { ...technology };
      if (tech.image.length > 0) {
        updatedTech = { ...updatedTech, image: tech.image };
      }
      if (technology?.name !== tech.name) {
        updatedTech = { ...updatedTech, name: tech.name };
      }
      if (technology?.isSkill !== tech.isSkill) {
        updatedTech = { ...updatedTech, isSkill: tech.isSkill };
      }

      await editTechnology({
        id: technology?.id || -1,
        data: updatedTech,
      });

      clearEditMode();
    }
  }

  async function deleteHandler() {
    if (technology && technology.id && technology.imgURL) {
      await deleteTechnology({ id: technology.id, imgURL: technology.imgURL });
    }
    clearEditMode();
  }

  function clearEditMode() {
    if (onSelect) {
      onSelect(undefined);
    }
  }

  function clearForm() {
    reset();
  }

  return (
    <form className={"flex flex-col items-start gap-4 py-10 xl:flex-row"}>
      <div className="flex w-[300px] flex-col justify-center gap-2 ">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          className={"text-black"}
          placeholder={"React ..."}
          {...register("name", {
            required: { value: true, message: "Name is required" },
          })}
        />
        {errors.name && (
          <p className={"text-xs text-red-500"}>{errors.name.message}</p>
        )}
      </div>

      <div className="flex w-[300px] flex-col justify-center gap-2 ">
        <Label htmlFor="picture">Picture</Label>
        <Input
          id="picture"
          className={"text-black"}
          type="file"
          {...register("image", {
            required: { value: mode !== "edit", message: "Image is required" },
            validate: validateImage,
          })}
        />

        {errors.image && (
          <p className={"text-xs text-red-500"}>{errors.image.message}</p>
        )}
      </div>

      <div className={"flex "}>
        <div className="flex  flex-col justify-center  ">
          <Label htmlFor="skill" className={"mb-4"}>
            Skill
          </Label>
          <label
            htmlFor={mode}
            className="me-5 inline-flex cursor-pointer items-center"
          >
            <input
              id={mode}
              type="checkbox"
              className="peer sr-only"
              {...register("isSkill")}
            />
            <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-2  dark:border-gray-600 dark:bg-gray-700  rtl:peer-checked:after:-translate-x-full"></div>
          </label>
        </div>
        <div className={"mt-5 space-x-2"}>
          {/*{image && <img src={URL.createObjectURL(image)} alt="Selected" />}{" "}*/}
          {/* Render the selected image if it exists */}
          {mode === "edit" ? (
            <>
              <Button
                onClick={handleSubmit(editHandler)}
                disabled={isEditing || isDeleting}
              >
                edit
              </Button>
              <Button
                onClick={handleSubmit(deleteHandler)}
                disabled={isDeleting || isEditing}
              >
                delete
              </Button>
            </>
          ) : (
            <Button onClick={handleSubmit(createHandler)} disabled={isCreating}>
              save
            </Button>
          )}
        </div>
      </div>
    </form>
  );
}

const validateImage = (value: FileList) => {
  const acceptedFormats = ["image/svg+xml"];
  if (value && value.length > 0) {
    const file = value[0];
    if (!acceptedFormats.includes(file.type)) {
      console.log("dose not pass here ");
      return "Invalid file format. Please upload an image file (SVG).";
    }
  }

  return true;
};
