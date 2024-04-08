import supabase from "@/services/supabase.ts";
import { TProject } from "@/types/Project.types.ts";
import { PostgrestResponse } from "@supabase/supabase-js";

export async function getAllProjectsAPI(): Promise<TProject[]> {
  const { data, error }: PostgrestResponse<TProject> = await supabase.from(
    "Projects",
  ).select(`
  id,
  created_at,
  title,
  description, 
  detail,
  level ,
  liveURL,
  thumbnailName,
  thumbnailURL,
  repository,
    Technology ( id, name , imgURL ,isSkill )
`);
  console.log(data);

  if (error) {
    throw new Error("Error fetching Projects ");
  }
  return data;
}
