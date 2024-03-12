interface SkillProps {
  name: string;
  imgURL: string;
}

const skillsData: SkillProps[] = [
  {
    name: "angular",
    imgURL: "/skills/angular.svg",
  },
  {
    name: "css",
    imgURL: "/skills/Css.svg",
  },
  {
    name: "Html",
    imgURL: "/skills/Html.svg",
  },
  {
    name: "Javascript",
    imgURL: "/skills/Javascript.svg",
  },
  {
    name: "react",
    imgURL: "/skills/React.svg",
  },
  {
    name: "Tailwind",
    imgURL: "/skills/Tailwind.svg",
  },
  {
    name: "Typescript",
    imgURL: "/skills/Typescript.svg",
  },
];

export function SkillsSection() {
  return (
    <section className=" px-5   py-32 md:max-w-[1400px] mx-auto  text-center ">
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
        <Skills />
      </div>
    </section>
  );
}

function Skills() {
  return (
    <div className={"flex justify-center"}>
      <div className="flex gap-8 md:gap-16 flex-wrap  justify-center">
        {skillsData.map((skill) => (
          <Skill skill={skill} key={skill.name} />
        ))}
      </div>
    </div>
  );
}

interface SkillComponentProps {
  skill: SkillProps;
}

function Skill({ skill }: SkillComponentProps) {
  return (
    <div className={" border-2 border-white rounded-3xl p-4 "}>
      <img src={skill.imgURL} alt={skill.name} className={"w-12 md:w-16 "} />
    </div>
  );
}
