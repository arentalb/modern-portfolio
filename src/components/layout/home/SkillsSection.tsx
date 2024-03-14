import { AnimatedSkills } from "@/components/common/aceternity/AnimatedSkills.tsx";

interface SkillProps {
  id: number;
  name: string;
  imgURL: string;
}

const skillsData: SkillProps[] = [
  {
    id: 1,
    name: "Angular",
    imgURL: "/skills/angular.svg",
  },
  {
    id: 2,
    name: "CSS",
    imgURL: "/skills/Css.svg",
  },
  {
    id: 3,
    name: "HTML",
    imgURL: "/skills/Html.svg",
  },
  {
    id: 4,
    name: "Javascript",
    imgURL: "/skills/Javascript.svg",
  },
  {
    id: 5,
    name: "React",
    imgURL: "/skills/React.svg",
  },
  {
    id: 6,
    name: "Tailwind",
    imgURL: "/skills/Tailwind.svg",
  },
  {
    id: 7,
    name: "Typescript",
    imgURL: "/skills/Typescript.svg",
  },
];

export function SkillsSection() {
  return (
    <section className=" px-5   py-32 md:max-w-[1400px] mx-auto  text-center  ">
      <div className={"flex justify-center flex-col items-center"}>
        <h1 className={"text-4xl font-bold mb-6"}> Skills That Set Me Apart</h1>
        <p
          className={
            "text-sm text-center text-gray-primary mb-14 sm:max-w-[500px] "
          }
        >
          My expertise extends across a spectrum of technologies, empowering me
          to create exceptional digital experiences. Here's a glimpse of what I
          bring to the table
        </p>
        <div className={"flex justify-center"}>
          <div className="flex gap-8 md:gap-16 flex-wrap  justify-center">
            <AnimatedSkills items={skillsData} />
          </div>
        </div>
      </div>
    </section>
  );
}
