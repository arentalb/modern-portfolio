import { useQuery } from "react-query";
import { TProject } from "@/types/Project.types.ts";
import { getProjectById } from "@/services/apiProjects.ts";

export function useGetProjectByID(id: number) {
  const { isLoading, data: project } = useQuery<TProject>({
    queryKey: [`project${id}`],
    queryFn: () => getProjectById(id),
  });
  return { project, isLoading };
}
