import { Input } from "@/components/common/ui/input.tsx";
import { Button } from "@/components/common/ui/button.tsx";
import { useCreateTechnology } from "@/features/admin/Technologies/useCreateTechnology.ts";
import { useDeleteTechnology } from "@/features/admin/Technologies/useDeleteTechnology.ts";
import { Label } from "@/components/common/ui/label.tsx";
import { useForm } from "react-hook-form";
import { useEditTechnology } from "@/features/admin/Technologies/useEditTechnology.ts";
import { useEffect } from "react";

type FormFields = {
  name: string;
  image: FileList;
  isSkill: boolean;
};

export function TechnologyForm({ mode = "normal", technology = null }) {
  const { isCreating, createTechnology } = useCreateTechnology();
  const { isDeleting, deleteTechnology } = useDeleteTechnology();
  const { isEditing, editTechnology } = useEditTechnology();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormFields>({
    defaultValues: technology ? technology : {},
  });

  useEffect(() => {
    if (technology) {
      setValue("name", technology.name);
      setValue("isSkill", technology.isSkill);
    }
  }, [technology, setValue]);

  function createHandler(data: FormFields) {
    createTechnology(data);
  }

  function editHandler(data: FormFields) {
    let newTech = {};
    if (data.image.length > 0) {
      newTech = { ...newTech, image: data.image[0] };
    }
    if (technology.name !== data.name) {
      newTech = { ...newTech, name: data.name };
    }
    if (technology.isSkill !== data.isSkill) {
      newTech = { ...newTech, isSkill: data.isSkill };
    }
    editTechnology({ id: technology.id, data: newTech });
  }

  function deleteHandler() {
    deleteTechnology(technology.id);
  }

  return (
    <form className={"flex items-start gap-4 py-10"}>
      <div className="grid w-[300px] max-w-sm items-center gap-1.5 ">
        <Label htmlFor="picture">Name</Label>
        <Input
          id="picture"
          type="text"
          className={"text-black "}
          placeholder={"CSS"}
          {...register("name", {
            required: { value: mode !== "edit", message: "Name is required" },
          })}
        />
        {errors.name && (
          <p className={"text-xs text-red-500"}>{errors.name.message}</p>
        )}
      </div>
      <div className="grid w-[300px] max-w-sm items-center gap-1.5">
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

      <div className=" flex flex-col ">
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
          <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-green-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-green-800 rtl:peer-checked:after:-translate-x-full"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
        </label>
      </div>
      <div className={"mt-auto space-x-2"}>
        {/*{image && <img src={URL.createObjectURL(image)} alt="Selected" />}{" "}*/}
        {/* Render the selected image if it exists */}
        {mode === "edit" ? (
          <>
            <Button onClick={handleSubmit(editHandler)} disabled={isEditing}>
              edit
            </Button>
            <Button onClick={handleSubmit(deleteHandler)} disabled={isDeleting}>
              delete
            </Button>
          </>
        ) : (
          <Button onClick={handleSubmit(createHandler)} disabled={isCreating}>
            save
          </Button>
        )}
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
