import { TechnologyForm } from "@/features/techenlogies/admin/TechnelogyForm.tsx";
import { TechnologyList } from "@/features/techenlogies/admin/TechnologyList.tsx";
import { useState } from "react";
import { TTechnology } from "@/types/Technology.types.ts";

export function TechnologiesAdminPage() {
  const [selectedTech, setSelectedTech] = useState<TTechnology>();

  return (
    <div>
      <h1 className={"text-4xl font-bold"}>Technologies</h1>
      <div className={"mt-16 "}>
        <TechnologyForm mode={"normal"} />
        <TechnologyList onSelect={setSelectedTech} />
        {selectedTech && (
          <TechnologyForm
            mode={"edit"}
            technology={selectedTech}
            onSelect={setSelectedTech}
          />
        )}
      </div>
    </div>
  );
}
