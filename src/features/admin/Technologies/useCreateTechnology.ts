import { useMutation, useQueryClient } from "react-query";
import { createTechnologyAPI } from "@/services/apiTechnologies.ts";
import { TTechnology } from "@/types/Technology.types.ts";

export function useCreateTechnology() {
  const queryClient = useQueryClient();

  const { mutateAsync: createTechnology, isLoading: isCreating } = useMutation({
    mutationFn: (data: TTechnology) => createTechnologyAPI(data),
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
