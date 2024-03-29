import supabase, { supabaseUrl } from "@/services/supabase.ts";
import { Technology } from "@/types/Technology.ts";
import { PostgrestResponse } from "@supabase/supabase-js";

export async function getAllTechnologiesAPI(): Promise<Technology[]> {
  const { data, error }: PostgrestResponse<Technology> = await supabase
    .from("Technology")
    .select("*");
  if (error) {
    throw new Error("Error fetching Technologies ");
  }
  return data;
}

export async function createTechnologyAPI(newTechnologyData: Technology) {
  if (!newTechnologyData.image || newTechnologyData.image.length === 0) {
    throw new Error("There is no image with tha data ");
  }

  const { imageName, imagePath } = generateImageNameAndPath(
    newTechnologyData.image[0].name,
  );

  const technology: Technology = {
    name: newTechnologyData.name,
    imgURL: imagePath,
    isSkill: newTechnologyData.isSkill,
  };

  const { data, error: dbError } = await supabase
    .from("Technology")
    .insert([technology])
    .select()
    .single();
  if (dbError) {
    throw new Error("Error creating new Technology ");
  }

  const { error: storageError } = await supabase.storage
    .from("Technology")
    .upload(imageName, newTechnologyData.image[0]);

  if (storageError) {
    await deleteTechnologyAPI(data.id);
    throw new Error("Error saving new Technology image");
  }
}

export async function updateTechnologyAPI(
  id: string | number,
  technology: Technology,
) {
  let updateObject = { ...technology };
  let generatedImageName = null;
  if (technology.image) {
    const { image, ...remainingFields } = technology;
    const { imageName, imagePath } = generateImageNameAndPath(image[0].name);
    updateObject = { ...remainingFields, imgURL: imagePath };
    generatedImageName = imageName;
  }
  if (!technology.image || technology.image.length === 0) {
    return;
  }

  const { data, error }: PostgrestResponse<Technology> = await supabase
    .from("Technology")
    .update(updateObject)
    .eq("id", id)
    .select();
  console.log(data);
  console.log(error);

  if (generatedImageName !== null) {
    const { error: storageError } = await supabase.storage
      .from("Technology")
      .upload(generatedImageName, technology.image[0]);

    if (storageError) {
      console.log(storageError);
      // await deleteTechnologyAPI(id);
    }
    console.log("not error");
  }
}

export async function deleteTechnologyAPI(id: number) {
  const { error } = await supabase.from("Technology").delete().eq("id", id);
  console.log(error);
}

function generateImageNameAndPath(name: string) {
  const imageName = `${Math.random()}-${name}`.replace(/\//g, "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/Technology/${imageName}`;
  return { imageName, imagePath };
}
