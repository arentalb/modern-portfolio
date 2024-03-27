import { Input } from "@/components/common/ui/input.tsx";
import { Button } from "@/components/common/ui/button.tsx";

export function LoginForm() {
  return (
    <div className={"flex h-screen items-center justify-center"}>
      <div className={"w-96  space-y-10 "}>
        <h1 className={"text-center text-4xl font-bold"}>Login Form </h1>
        <div className={"  space-y-10 rounded-lg border border-white p-5 "}>
          <div>
            <label htmlFor="" className={"text-sm"}>
              Username
            </label>
            <Input type={"text"} className={"mt-2 text-black"} />
          </div>
          <div>
            <label htmlFor="" className={"text-sm"}>
              Password
            </label>
            <Input type={"password"} className={"mt-2 text-black"} />
          </div>
          <Button className={"w-full font-bold"}>Login</Button>
        </div>
      </div>
    </div>
  );
}
