import { useMutation } from "react-query";

import { TUser } from "@/types/User.types.ts";
import { authenticateUserAPI } from "@/services/apiUser.ts";

export function useAuthenticateUser() {
  const { mutateAsync: authenticateUser, isLoading: isAuthenticating } =
    useMutation({
      mutationFn: (data: TUser) => authenticateUserAPI(data),
      onSuccess: () => {},
      onError: (error) => {
        console.log(error);
      },
    });
  return { isAuthenticating, authenticateUser };
}
