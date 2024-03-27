import { Outlet } from "react-router";
import { AdminSideMenu } from "@/features/admin/AdminSideMenu.tsx";

export function AdminPage() {
  return (
    <>
      <div className={""}>
        <div>
          <AdminSideMenu />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
