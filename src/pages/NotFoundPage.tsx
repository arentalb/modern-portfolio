import { Header } from "@/ui/Header.tsx";
import { ComingSoon } from "@/ui/aceternity/ComingSoon.tsx";

export function NotFoundPage() {
  return (
    <>
      <Header />
      <ComingSoon text={"Page Not Found"} />
    </>
  );
}
