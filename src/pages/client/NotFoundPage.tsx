import { Header } from "@/components/Header.tsx";
import { ComingSoon } from "@/components/aceternity/ComingSoon.tsx";

export function NotFoundPage() {
  return (
    <>
      <Header />
      <ComingSoon text={"Page Not Found"} />
    </>
  );
}
