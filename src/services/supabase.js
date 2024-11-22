import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://yfxqrntzzqtcpafeczft.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmeHFybnR6enF0Y3BhZmVjemZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0MzMzODMsImV4cCI6MjA0NzAwOTM4M30.-MeQ150Lb1oFSY1jrAQuqMcvTK_1YweF9hIq5Ttu2gM",
);
