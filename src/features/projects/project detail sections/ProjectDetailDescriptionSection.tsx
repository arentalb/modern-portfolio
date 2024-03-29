import { RevealCenter } from "@/components/animations/RevealCenter.tsx";
import { ProjectInterface } from "@/types/ProjectInterface.ts";

export function ProjectDetailDescriptionSection({
  project,
}: {
  project: ProjectInterface;
}) {
  return (
    <RevealCenter>
      <section className="mx-auto max-w-[1400px] px-5 pt-20 sm:px-5 sm:pt-20">
        <div className={"flex flex-col justify-between font-bold"}>
          <h1 className={"mb-8 text-3xl  md:text-4xl "}>Description</h1>
          <p
            className={
              "w-full text-sm  text-gray-primary sm:max-w-[70%] md:text-base"
            }
          >
            {project.longDescription}
          </p>
        </div>
      </section>
    </RevealCenter>
  );
}
