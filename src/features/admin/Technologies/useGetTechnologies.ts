import { useQuery } from "react-query";
import { getTechnologiesAPI } from "@/services/apiTechnologies.ts";

export function useGetTechnologies() {
  const {
    isLoading,
    data: technologies,
    error,
  } = useQuery({
    queryKey: ["technologies"],
    queryFn: getTechnologiesAPI,
  });
  return { technologies, isLoading, error };
}
