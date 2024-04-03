import { RevealCenter } from "@/components/animations/RevealCenter.tsx";
import { Link } from "react-router-dom";
import { ProjectTypes, TStack } from "@/types/Project.types.ts";

export function ProjectsDetailsSection({ project }: { project: ProjectTypes }) {
  return (
    <RevealCenter>
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-5 sm:py-32">
        <div className={"flex flex-col justify-between gap-20 font-bold"}>
          <Detail items={project.technologies} title={"Main Stack"} />
          <Detail items={project.libraries} title={"Libraries"} />
          <Detail items={project.repository} title={"Repositories"} />
        </div>
      </section>
    </RevealCenter>
  );
}

export function Detail({ items, title }: { items: TStack[]; title: string }) {
  return (
    <RevealCenter>
      <div className={"flex flex-col justify-between font-bold"}>
        <h1 className={"mb-8 text-3xl  md:text-4xl "}>{title}</h1>
        <div className={"flex flex-wrap gap-8"}>
          {items.map((item) => (
            <Label item={item} />
          ))}
        </div>
      </div>
    </RevealCenter>
  );
}

function Label({ item }: { item: TStack }) {
  return (
    <div
      className={
        "flex min-w-40 items-center justify-between rounded-full bg-white px-6 py-2 text-black sm:min-w-48"
      }
    >
      {item.name}
      <Link to={item.link}>
        <img src="/icons/link.svg" alt="" className={"w-5"} />
      </Link>
    </div>
  );
}
