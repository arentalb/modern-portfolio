import { useMutation, useQueryClient } from "react-query";
import { deleteTechnologyAPI } from "@/services/apiTechnologies.ts";

export function useDeleteTechnology() {
  const queryClient = useQueryClient();

  const { mutateAsync: deleteTechnology, isLoading: isDeleting } = useMutation({
    mutationFn: ({ id, imgURL }: { id: number; imgURL: string }) =>
      deleteTechnologyAPI(id, imgURL),
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
