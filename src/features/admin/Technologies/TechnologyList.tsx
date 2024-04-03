import { useGetTechnologies } from "@/features/admin/Technologies/useGetTechnologies.ts";
import { Loading } from "@/components/Loading.tsx";
import { TTechnology } from "@/types/Technology.types.ts";

export function TechnologyList({
  onSelect,
}: {
  onSelect: (selectedTech: TTechnology | undefined) => void;
}) {
  const { technologies, isLoading } = useGetTechnologies();
  return (
    <div className={"flex flex-wrap gap-10 pt-20"}>
      {isLoading && <Loading />}
      {technologies && (
        <>
          {technologies.map((tech) => (
            <Technology tech={tech} key={tech.id} onSelect={onSelect} />
          ))}
        </>
      )}
    </div>
  );
}

function Technology({
  tech,
  onSelect,
}: {
  tech: TTechnology;
  onSelect: (tech: TTechnology) => void;
}) {
  return (
    <div className={"flex flex-col items-center justify-center gap-4 "}>
      <div
        onClick={() => onSelect(tech)}
        className={" rounded-3xl border-2 border-white p-4"}
      >
        <img
          src={tech.imgURL}
          alt=""
          className={
            "w-12 object-cover object-top  transition duration-500 hover:scale-105 md:w-16"
          }
        />
      </div>
      <span>{tech.name}</span>
    </div>
  );
}
