import { RevealCenter } from "@/components/animations/RevealCenter.tsx";
import { Input } from "@/components/common/ui/input.tsx";
import { Button } from "@/components/common/ui/button.tsx";
import { Project } from "@/features/projects/Project.tsx";
import { Projects } from "@/data/projects.ts";

export function ProjectsListSection() {
  return (
    <RevealCenter>
      <section className="mx-auto max-w-[1400px] px-5 py-20  sm:px-5 sm:py-32">
        <Search />
        <ProjectsList />
      </section>
    </RevealCenter>
  );
}

function Search() {
  return (
    <div className={"mb-20 flex items-center font-bold"}>
      <div className={"flex w-full  gap-4 text-black"}>
        <Input
          className={"text-md w-60 sm:w-80"}
          id="search"
          name="search"
          type="text"
          placeholder="React..."
        />
        <Button
          className={"text-md w-28 space-x-4 font-bold sm:w-32"}
          variant={"outline"}
        >
          search
        </Button>
      </div>
    </div>
  );
}

function ProjectsList() {
  return (
    <div className="grid grid-cols-1 justify-center gap-x-8  gap-y-16 sm:grid-cols-2 md:grid-cols-3  ">
      {Projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
}
