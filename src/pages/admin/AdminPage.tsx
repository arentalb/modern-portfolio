import { Outlet } from "react-router";
import { Header } from "@/components/Header.tsx";
import { RevealCenter } from "@/components/animations/RevealCenter.tsx";

export function AdminPage() {
  return (
    <>
      <Header />
      {/* becuse the header is in somewhere that only the outlet is re renders so when we navigate between two pages that is inside a route it will not hide by it self */}
      <RevealCenter>
        <section className="mx-auto flex max-w-[1400px] flex-col items-center justify-between  gap-20 px-5  pb-32 pt-16 sm:flex-row  ">
          <Outlet />
        </section>
      </RevealCenter>
    </>
  );
}
