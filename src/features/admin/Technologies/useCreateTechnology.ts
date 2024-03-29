import { useMutation, useQueryClient } from "react-query";
import { createTechnologyAPI } from "@/services/apiTechnologies.ts";

export function useCreateTechnology() {
  const queryClient = useQueryClient();

  const { mutate: createTechnology, isLoading: isCreating } = useMutation({
    mutationFn: (data) => createTechnologyAPI(data),
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
