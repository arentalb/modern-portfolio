import { TechnelogyForm } from "@/features/admin/Technologies/TechnelogyForm.tsx";
import { TechnelogySkills } from "@/features/admin/Technologies/TechnelogySkills.tsx";

export function TechnologiesAdminPage() {
  return (
    <div>
      <h1 className={"text-4xl"}>Technologies</h1>
      <div className={"mt-16 "}>
        <TechnelogyForm mode={"normal"} />
        <TechnelogySkills />
        <TechnelogyForm mode={"edit"} />
      </div>
    </div>
  );
}
