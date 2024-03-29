import { useMutation, useQueryClient } from "react-query";
import { deleteTechnologyAPI } from "@/services/apiTechnologies.ts";

export function useDeleteTechnology() {
  const queryClient = useQueryClient();

  const { mutate: deleteTechnology, isLoading: isDeleting } = useMutation({
    mutationFn: (id) => deleteTechnologyAPI(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["technologies"],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { isDeleting, deleteTechnology };
}
