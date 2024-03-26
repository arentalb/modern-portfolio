import { RevealCenter } from "@/components/animations/RevealCenter.tsx";

export function ProjectsHeroSection() {
  return (
    <RevealCenter>
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-5 sm:py-32">
        <div className={"flex flex-col items-center justify-center font-bold"}>
          <h1 className={"mb-6 text-center text-5xl md:text-6xl "}>
            Explore My Creative Projects
          </h1>
          <p
            className={
              "mb-14 max-w-[500px] text-center text-sm text-gray-primary md:text-base"
            }
          >
            Dive into the diverse range of projects that showcase my skills and
            passion for innovation.
          </p>
        </div>
      </section>
    </RevealCenter>
  );
}
