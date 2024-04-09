import { RevealCenter } from "@/components/animations/RevealCenter.tsx";
import { TProject } from "@/types/Project.types.ts";
import { Loading } from "@/components/Loading.tsx";

export function ProjectDetailDescriptionSection({
  project,
  isLoading,
}: {
  project: TProject | undefined;
  isLoading: boolean;
}) {
  return (
    <RevealCenter>
      <section className="mx-auto max-w-[1400px] px-5 pt-20 sm:px-5 sm:pt-20">
        {!isLoading && project ? (
          <div className={"flex flex-col justify-between font-bold"}>
            <h1 className={"mb-8 text-3xl  md:text-4xl "}>Description</h1>
            <p
              className={
                "w-full text-sm  text-gray-primary sm:max-w-[70%] md:text-base"
              }
            >
              {project.detail}
            </p>
          </div>
        ) : (
          <Loading />
        )}
      </section>
    </RevealCenter>
  );
}
