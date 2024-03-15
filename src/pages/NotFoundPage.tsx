import { Header } from "@/components/layout/Header.tsx";
import { ComingSoon } from "@/components/layout/ComingSoon.tsx";

export function NotFoundPage() {
  return (
    <>
      <Header />
      <ComingSoon text={"Page Not Found"} />
    </>
  );
}
