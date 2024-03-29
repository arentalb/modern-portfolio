import { useQuery } from "react-query";
import { getAllTechnologiesAPI } from "@/services/apiTechnologies.ts";

export function useGetTechnologies() {
  const {
    isLoading,
    data: technologies,
    error,
  } = useQuery({
    queryKey: ["technologies"],
    queryFn: getAllTechnologiesAPI,
  });
  return { technologies, isLoading, error };
}
