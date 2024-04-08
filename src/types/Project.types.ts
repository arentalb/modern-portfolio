import { TTechnology } from "@/types/Technology.types.ts";

export interface TProject {
  id: number;
  created_at: string;
  title: string;
  description: string;
  detail: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  liveURL: string;
  thumbnailName: string;
  thumbnailURL: string;
  repository: string[];
  technologies: TTechnology[];
}
