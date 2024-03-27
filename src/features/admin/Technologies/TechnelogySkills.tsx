const skillsData = [
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

export function TechnelogySkills() {
  return (
    <div className={"flex flex-wrap gap-10 pt-20"}>
      {skillsData.map((skill) => (
        <Skill skill={skill} />
      ))}
    </div>
  );
}

function Skill({ skill }) {
  return (
    <div
      className={
        " flex h-28 w-28 flex-col items-center justify-center rounded-3xl  border-2 border-white p-4"
      }
    >
      <img
        src={skill.imgURL}
        alt=""
        className={" relative  mb-2  w-12 object-cover object-top"}
      />
      <span>{skill.name}</span>
    </div>
  );
}
