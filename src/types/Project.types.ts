export interface TStack {
  name: string;
  link: string;
}

export interface ProjectTypes {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  link: string;
  imageURL: string;
  technologies: TStack[]; // Array of Technology objects
  libraries: TStack[]; // Optional array of Technology objects
  repository: TStack[]; // Array of Repository objects
  liveLink: string;
}
