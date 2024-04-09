import { useQuery } from "react-query";
import { getAllProjectsAPI } from "@/services/apiProjects.ts";
import { TProject } from "@/types/Project.types.ts";

export function useGetProjects() {
  const { isLoading, data: projects } = useQuery<TProject[]>({
    queryKey: ["projects"],
    queryFn: getAllProjectsAPI,
  });
  return { projects, isLoading };
}
