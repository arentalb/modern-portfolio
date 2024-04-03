import { Session, User, WeakPassword } from "@supabase/supabase-js";

export interface TUser {
  email: string;
  password: string;
}

export interface TSupabaseAuthResposnse {
  user: User;
  session: Session;
  weakPassword?: WeakPassword | undefined;
}
