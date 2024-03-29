import supabase, { supabaseUrl } from "@/services/supabase.ts";

export async function getTechnologiesAPI() {
  let { data, error } = await supabase.from("Technology").select("*");

  if (error) {
    throw new Error("error fetching Technologies ");
  }
  return data;
}

export async function createTechnologyAPI(newTechnology) {
  const { imageName, imagePath } = generateImageNameAndPath(
    newTechnology.image[0].name,
  );

  const technology = {
    name: newTechnology.name,
    imgURL: imagePath,
    isSkill: newTechnology.isSkill,
  };

  const { data, error } = await supabase
    .from("Technology")
    .insert([technology])
    .select()
    .single();

  const { error: storageError } = await supabase.storage
    .from("Technology")
    .upload(imageName, newTechnology.image[0]);

  if (storageError) {
    await deleteTechnologyAPI(data.id);
  }
  console.log("not error");
}

export async function editTechnologyAPI(id, technology) {
  let updateObject = { ...technology };
  let generatedImageName = null;
  if (technology.image) {
    const { image, ...remainingFields } = technology;
    const { imageName, imagePath } = generateImageNameAndPath(image.name);
    updateObject = { ...remainingFields, imgURL: imagePath };
    generatedImageName = imageName;
  }

  const { data, error } = await supabase
    .from("Technology")
    .update(updateObject)
    .eq("id", id)
    .select();

  console.log(error);

  if (generatedImageName !== null) {
    const { error: storageError } = await supabase.storage
      .from("Technology")
      .upload(generatedImageName, technology.image);

    if (storageError) {
      console.log(storageError);
      // await deleteTechnologyAPI(id);
    }
    console.log("not error");
  }
}

export async function deleteTechnologyAPI(id) {
  const { error } = await supabase.from("Technology").delete().eq("id", id);
}

function generateImageNameAndPath(name) {
  const imageName = `${Math.random()}-${name}`.replaceAll("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/Technology/${imageName}`;
  return { imageName, imagePath };
}
