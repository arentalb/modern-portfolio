import { useGetTechnologies } from "@/features/admin/Technologies/useGetTechnologies.ts";
import { Loading } from "@/components/Loading.tsx";
import { Error } from "@/components/Error.tsx";
import { TechnologyForm } from "@/features/admin/Technologies/TechnelogyForm.tsx";
import { useState } from "react";

export function TechnologyList() {
  const { technologies, isLoading, error } = useGetTechnologies();
  const [technologySelected, setTechnologySelected] = useState(null);
  return (
    <div>
      <div className={"flex flex-wrap gap-10 pt-20"}>
        {isLoading && <Loading />}
        {error && <Error message={error} />}
        {technologies && (
          <>
            {technologies.map((skill) => (
              <Skill
                skill={skill}
                key={skill.id}
                select={setTechnologySelected}
              />
            ))}
          </>
        )}
      </div>
      {technologySelected && (
        <TechnologyForm mode={"edit"} technology={technologySelected} />
      )}
    </div>
  );
}

function Skill({ skill, select }) {
  return (
    <div
      onClick={() => select(skill)}
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
