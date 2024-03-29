import { useMutation, useQueryClient } from "react-query";
import { createTechnologyAPI } from "@/services/apiTechnologies.ts";
import { TechnologyInterface } from "@/types/TechnologyInterface.ts";

export function useCreateTechnology() {
  const queryClient = useQueryClient();

  const { mutate: createTechnology, isLoading: isCreating } = useMutation({
    mutationFn: (data: TechnologyInterface) => createTechnologyAPI(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["technologies"],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { isCreating, createTechnology };
}
