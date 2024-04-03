import supabase from "@/services/supabase.ts";
import { TUser } from "@/types/User.types.ts";

export async function authenticateUserAPI(userData: TUser) {
  console.log(userData);

  const { data, error } = await supabase.auth.signInWithPassword({
    email: userData.email,
    password: userData.password,
  });

  if (error) {
    throw new Error("Error authenticate user  ");
  }
  return data;
}
