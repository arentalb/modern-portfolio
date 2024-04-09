import { RevealCenter } from "@/components/animations/RevealCenter.tsx";
import { TProject } from "@/types/Project.types.ts";
import { TTechnology } from "@/types/Technology.types.ts";
import { Link } from "react-router-dom";
import { Loading } from "@/components/Loading.tsx";

export function ProjectsDetailsSection({
  project,
  isLoading,
}: {
  project: TProject | undefined;
  isLoading: boolean;
}) {
  return (
    <RevealCenter>
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-5 sm:py-32">
        {!isLoading && project ? (
          <>
            <div className={"mb-20"}>
              <h1 className={"mb-8 text-3xl  font-bold md:text-4xl"}>
                Tech Stack
              </h1>
              <div className={"flex flex-wrap gap-10 font-bold md:gap-20"}>
                {project.Technology.map((tech) => (
                  <Tech tech={tech} key={tech.id} />
                ))}
              </div>
            </div>
            <h1 className={"mb-8 text-3xl  font-bold md:text-4xl"}>
              Repositories
            </h1>
            <div className={"flex flex-wrap gap-10 font-bold md:gap-20"}>
              {project.repository.map((repo) => (
                <div
                  key={repo}
                  className={
                    "flex min-w-40 items-center justify-between rounded-full bg-white px-6 py-2 text-black sm:min-w-48"
                  }
                >
                  Main Repo
                  <Link to={repo}>
                    <img src="/icons/link.svg" alt="" className={"w-5"} />
                  </Link>
                </div>
              ))}
            </div>
          </>
        ) : (
          <Loading />
        )}
      </section>
    </RevealCenter>
  );
}

function Tech({ tech }: { tech: TTechnology }) {
  return (
    <div className={"flex flex-col items-center justify-center gap-4 "}>
      <div className={" rounded-3xl border-2 border-white p-4"}>
        <img
          src={tech.imgURL}
          alt={tech.name}
          className={
            "w-12 object-cover object-top  transition duration-500 hover:scale-105 md:w-16"
          }
        />
      </div>
      <span>{tech.name}</span>
    </div>
  );
}
