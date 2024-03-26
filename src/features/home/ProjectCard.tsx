import { textShortener } from "@/utils/textShortener.ts";

interface ProjectProp {
  title: string;
  description: string;
  link: string;
}

interface ProjectComponentProps {
  project: ProjectProp;
}

export function ProjectCard({ project }: ProjectComponentProps) {
  return (
    <div
      className={
        "flex max-w-[300px] flex-col items-start justify-between rounded-3xl border border-white  px-6 py-14  sm:max-w-[600px]"
      }
    >
      <div>
        <p className={"mb-6 text-2xl font-bold sm:text-3xl"}>{project.title}</p>
        <p className={"text-sm font-semibold leading-6"}>
          <span className={"block sm:hidden"}>
            {textShortener(project.description, 20)}
          </span>
          <span className={"hidden sm:block md:hidden"}>
            {textShortener(project.description, 30)}
          </span>
          <span className={"hidden md:block"}>
            {textShortener(project.description, 40)}
          </span>
        </p>
      </div>
    </div>
  );
}
