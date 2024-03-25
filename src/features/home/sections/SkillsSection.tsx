import { AnimatedSkills } from "@/ui/aceternity/AnimatedSkills.tsx";
import { RevealCenter } from "@/ui/animations/RevealCenter.tsx";

interface SkillProps {
  id: number;
  name: string;
  imgURL: string;
}

const skillsData: SkillProps[] = [
  { id: 1, name: "Java", imgURL: "/skills/Java.svg" },
  { id: 2, name: "Javascript", imgURL: "/skills/Javascript.svg" },
  { id: 3, name: "React", imgURL: "/skills/React.svg" },
  { id: 4, name: "Angular", imgURL: "/skills/Angular.svg" },
  { id: 5, name: "RxJs", imgURL: "/skills/RxJs.svg" },
  { id: 6, name: "Redux", imgURL: "/skills/Redux.svg" },
  { id: 7, name: "Git", imgURL: "/skills/Git.svg" },
  { id: 8, name: "Github", imgURL: "/skills/Github.svg" },
  { id: 9, name: "HTML", imgURL: "/skills/HTML.svg" },
  { id: 10, name: "CSS", imgURL: "/skills/CSS.svg" },
  { id: 11, name: "Tailwind", imgURL: "/skills/Tailwind.svg" },
  { id: 12, name: "Firebase", imgURL: "/skills/Firebase.svg" },
  { id: 13, name: "Supabase", imgURL: "/skills/Supabase.svg" },
  { id: 14, name: "Postgresql", imgURL: "/skills/Postgresql.svg" },
  { id: 15, name: "MySql", imgURL: "/skills/MySql.svg" },
];

export function SkillsSection() {
  return (
    <RevealCenter delay={0.3}>
      <section className=" mx-auto   px-5 py-32 text-center  md:max-w-[1400px]  ">
        <div className={"flex flex-col items-center justify-center"}>
          <h1 className={"mb-6 text-4xl font-bold"}>
            Skills That Set Me Apart
          </h1>
          <p
            className={
              "mb-14 text-center text-sm font-bold  text-gray-primary sm:max-w-[500px] "
            }
          >
            My expertise extends across a spectrum of technologies, empowering
            me to create exceptional digital experiences. Here's a glimpse of
            what I bring to the table
          </p>
          <div className={"flex justify-center"}>
            <div className="flex flex-wrap justify-center gap-8  md:gap-16">
              <AnimatedSkills items={skillsData} />
            </div>
          </div>
        </div>
      </section>
    </RevealCenter>
  );
}
