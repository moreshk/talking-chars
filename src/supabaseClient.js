import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vwbegbzowuqmmovjgkuy.supabase.co";
const supabaseAnonKey =
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
    .eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3YmVnYnpvd3VxbW1vdmpna3V5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgzODQxODMsImV4cCI6MjAwMzk2MDE4M30
    .U0ioJNSuo9JGy_u7M1sX2EyXpaSwjTPptu6japOw6CM;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
