export interface StackType {
  name: string;
  link: string;
}

export interface ProjectInterface {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  link: string;
  imageURL: string;
  technologies: StackType[]; // Array of Technology objects
  libraries: StackType[]; // Optional array of Technology objects
  repository: StackType[]; // Array of Repository objects
  liveLink: string;
}
