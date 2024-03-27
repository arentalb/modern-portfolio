import { Input } from "@/components/common/ui/input.tsx";
import { Button } from "@/components/common/ui/button.tsx";
import { Label } from "@/components/common/ui/label.tsx";

export function TechnologiesAdminPage() {
  return (
    <div>
      <h1 className={"text-4xl"}>Technologies</h1>
      <div className={"mt-16 "}>
        <Form mode={"normal"} />
        <Skills />
        <Form mode={"edit"} />
      </div>
    </div>
  );
}

function Form({ mode }) {
  return (
    <form className={"flex items-end gap-4 py-10"}>
      <div className="grid w-[300px] max-w-sm items-center gap-1.5 ">
        <Label htmlFor="picture">name</Label>
        <Input
          id="picture"
          type="text"
          className={"text-black "}
          placeholder={"CSS"}
        />
      </div>
      <div className="grid w-[300px] max-w-sm items-center gap-1.5 ">
        <Label htmlFor="picture">Picture</Label>
        <Input id="picture" type="file" />
      </div>
      {mode === "edit" ? (
        <>
          <Button>edit</Button>
          <Button>delete</Button>
        </>
      ) : (
        <Button>save</Button>
      )}
    </form>
  );
}

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

function Skills() {
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
