import { useMutation, useQueryClient } from "react-query";
import { updateTechnologyAPI } from "@/services/apiTechnologies.ts";
import { TechnologyInterface } from "@/types/TechnologyInterface.ts";

export function useEditTechnology() {
  const queryClient = useQueryClient();

  const { mutate: editTechnology, isLoading: isEditing } = useMutation({
    mutationFn: ({ id, data }: { id: number; data: TechnologyInterface }) =>
      updateTechnologyAPI(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["technologies"],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { isEditing, editTechnology };
}
