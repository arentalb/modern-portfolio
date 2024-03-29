import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://txaaaarhhtxpwqztftww.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4YWFhYXJoaHR4cHdxenRmdHd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE1NDE1NTksImV4cCI6MjAyNzExNzU1OX0.WlLTPgxPXhN9wJSr7pXYRR-hEIdNVH1QcSmUUtkqpJs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
