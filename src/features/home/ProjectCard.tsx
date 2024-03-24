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
        "flex max-w-[300px] flex-col items-start justify-between rounded-3xl border border-white p-2 px-6 pb-6  pt-10 sm:max-w-[600px]"
      }
    >
      <div>
        <p className={"mb-6 text-2xl font-bold sm:text-3xl"}>{project.title}</p>
        <p className={"mb-12 block text-xs font-semibold leading-5 sm:hidden"}>
          {textShortener(project.description, 20)}
        </p>
        <p className={"mb-12 hidden text-sm font-semibold leading-6 sm:block"}>
          {textShortener(project.description, 40)}
        </p>
      </div>
    </div>
  );
}
