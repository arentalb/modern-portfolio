import { useGetProjects } from "@/features/admin/Projects/useGetProjects.ts";

export function AdminProjectsPage() {
  const { projects, isLoading } = useGetProjects();

  return (
    <div>
      <h1 className={"text-4xl font-bold"}>Projects</h1>
      <div className={"mt-16 "}>Projects page</div>
      {projects ? JSON.stringify(projects) : "no project "}
      {isLoading ? <p>loading </p> : "no loading "}
    </div>
  );
}
