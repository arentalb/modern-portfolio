import { Link } from "react-router-dom";
import { TProject } from "@/data/projects.ts";

export function Project({ project }: { project: TProject }) {
  return (
    <div className="mb-8 rounded-md">
      <img src={project.imagePath} alt="" className={"mb-6"} />
      <h1 className={"mb-2 text-3xl font-bold"}>{project.title}</h1>
      <p className={"mb-10  text-gray-primary"}>{project.description}</p>

      <div className={"mt-auto flex items-center justify-between pr-8"}>
        {/*<LevelList level={"Beginner"} />*/}
        <Link
          className={
            "mt-auto text-sm text-blue-400 hover:underline hover:underline-offset-4"
          }
          to={`/project/${project.id}`}
        >
          LEARN MORE
        </Link>
      </div>
    </div>
  );
}
