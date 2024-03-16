import { AnimatedSkills } from "@/components/common/aceternity/AnimatedSkills.tsx";
import { RevealCenter } from "@/components/animations/RevealCenter.tsx";

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
      <section className=" px-5   py-32 md:max-w-[1400px] mx-auto  text-center  ">
        <div className={"flex justify-center flex-col items-center"}>
          <h1 className={"text-4xl font-bold mb-6"}>
            {" "}
            Skills That Set Me Apart
          </h1>
          <p
            className={
              "text-sm text-center text-gray-primary mb-14 sm:max-w-[500px] "
            }
          >
            My expertise extends across a spectrum of technologies, empowering
            me to create exceptional digital experiences. Here's a glimpse of
            what I bring to the table
          </p>
          <div className={"flex justify-center"}>
            <div className="flex gap-8 md:gap-16 flex-wrap  justify-center">
              <AnimatedSkills items={skillsData} />
            </div>
          </div>
        </div>
      </section>
    </RevealCenter>
  );
}
