import { useQuery } from "react-query";
import { getAllTechnologiesAPI } from "@/services/apiTechnologies.ts";
import { TechnologyInterface } from "@/types/TechnologyInterface.ts";

export function useGetTechnologies() {
  const { isLoading, data: technologies } = useQuery<TechnologyInterface[]>({
    queryKey: ["technologies"],
    queryFn: getAllTechnologiesAPI,
  });
  return { technologies, isLoading };
}
