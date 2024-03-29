import { TechnologyForm } from "@/features/admin/Technologies/TechnelogyForm.tsx";
import { TechnologyList } from "@/features/admin/Technologies/TechnologyList.tsx";

export function TechnologiesAdminPage() {
  return (
    <div>
      <h1 className={"text-4xl"}>Technologies</h1>
      <div className={"mt-16 "}>
        <TechnologyForm mode={"normal"} />
        <TechnologyList />
      </div>
    </div>
  );
}
