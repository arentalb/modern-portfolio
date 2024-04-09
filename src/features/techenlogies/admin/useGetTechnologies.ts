import { useQuery } from "react-query";
import { getAllTechnologiesAPI } from "@/services/apiTechnologies.ts";
import { TTechnology } from "@/types/Technology.types.ts";

export function useGetTechnologies() {
  const { isLoading, data: technologies } = useQuery<TTechnology[]>({
    queryKey: ["technologies"],
    queryFn: getAllTechnologiesAPI,
  });
  return { technologies, isLoading };
}
