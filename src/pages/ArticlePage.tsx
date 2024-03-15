import { Header } from "@/components/layout/Header.tsx";
import { ComingSoon } from "@/components/layout/ComingSoon.tsx";

export function ArticlePage() {
  return (
    <>
      <Header />
      <ComingSoon text={"Coming soon"} />
    </>
  );
}
