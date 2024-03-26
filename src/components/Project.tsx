import { LevelList } from "@/components/LevelList.tsx";
import { Link } from "react-router-dom";

export function Project({ project }) {
  return (
    <div className="mb-8 rounded-md">
      <img src={project.imageURL} alt="" className={"mb-6"} />
      <h1 className={"mb-2 text-3xl font-bold"}>{project.title}</h1>
      <p className={"mb-10 w-4/5 text-gray-primary"}>{project.description}</p>

      <div className={"flex items-center justify-between pr-8"}>
        <LevelList level={project.level} />
        <Link
          className={
            "text-sm text-blue-400 hover:underline hover:underline-offset-4"
          }
          to={project.link}
        >
          LEARN MORE
        </Link>
      </div>
    </div>
  );
}
