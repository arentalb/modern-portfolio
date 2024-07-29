import { AnimatedSkills } from "@/components/aceternity/AnimatedSkills.tsx";
import { RevealCenter } from "@/components/animations/RevealCenter.tsx";
import { Skills } from "@/data/skills.ts";

const skills = Skills;

export function SkillsSection() {
  return (
    <RevealCenter delay={0.3}>
      <section className="mx-auto max-w-[1400px] px-5 py-32  text-center  ">
        <div
          className={
            "flex flex-col items-center justify-center text-center font-bold"
          }
        >
          <h1 className={"mb-6 text-4xl "}>Skills That Set Me Apart</h1>
          <p className={"mb-14  max-w-[500px]   text-sm text-gray-primary "}>
            My expertise extends across a spectrum of technologies, empowering
            me to create exceptional digital experiences. Here's a glimpse of
            what I bring to the table
          </p>
          <div className={"flex justify-center"}>
            <div className="flex flex-wrap justify-center gap-8  md:gap-16">
              <AnimatedSkills items={skills} />
            </div>
          </div>
        </div>
      </section>
    </RevealCenter>
  );
}
