import { Outlet } from "react-router";
import { AdminSideMenu } from "@/features/admin/AdminSideMenu.tsx";

export function AdminPage() {
  return (
    <div className={"flex h-screen"}>
      <aside className="w-[300px] flex-shrink-0 border-r-2 border-r-white p-10">
        <AdminSideMenu />
      </aside>
      <main className="flex-1 overflow-scroll p-10">
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
