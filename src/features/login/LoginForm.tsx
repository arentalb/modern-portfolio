import { Input } from "@/components/common/ui/input.tsx";
import { Button } from "@/components/common/ui/button.tsx";
import { useAuth } from "@/context/AuthContext.tsx";
import { useForm } from "react-hook-form";
import { TSupabaseAuthResposnse, TUser } from "@/types/User.types.ts";
import { useAuthenticateUser } from "@/features/login/useAuthenticateUser.ts";
import { useNavigate } from "react-router";

export function LoginForm() {
  const { login, logout } = useAuth();
  const { authenticateUser } = useAuthenticateUser();
  const { register, handleSubmit } = useForm<TUser>();

  const navigate = useNavigate();

  async function loginHandler(user: TUser) {
    const result: TSupabaseAuthResposnse = await authenticateUser(user);
    if (result) {
      login(result);
      navigate("/admin/technologies");
    } else {
      logout();
    }
  }

  return (
    <div className={"flex h-screen items-center justify-center"}>
      <div className={"w-96  space-y-10 "}>
        <h1 className={"text-center text-4xl font-bold"}>Login Form </h1>
        <div className={"  space-y-10 rounded-lg border border-white p-5 "}>
          <div>
            <label htmlFor="email" className={"text-sm"}>
              Username
            </label>
            <Input
              id={"email"}
              type={"email"}
              className={"mt-2 text-black"}
              {...register("email")}
            />
          </div>
          <div>
            <label htmlFor="password" className={"text-sm"}>
              Password
            </label>
            <Input
              id={"password"}
              type={"password"}
              className={"mt-2 text-black"}
              {...register("password")}
            />
          </div>
          <Button
            className={"w-full font-bold"}
            onClick={handleSubmit(loginHandler)}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
