import { NavLink } from "react-router-dom";

export function AdminSideMenu() {
  return (
    <div className={"flex flex-col items-center justify-center"}>
      <img src="/images/logo.svg" alt="" />
      <div className={"mt-20 flex flex-col gap-6 "}>
        <MenuLink destination={"/admin/technologies"}>Technologies</MenuLink>
        <MenuLink destination={"/admin/settings"}>Settings</MenuLink>
      </div>
    </div>
  );
}

function MenuLink({ destination, children }) {
  return (
    <NavLink
      className={({ isActive }: { isActive: boolean }) =>
        isActive
          ? "h-10 rounded-md bg-gray-200 px-4 py-2 text-center"
          : "h-10 rounded-md bg-white px-4 py-2 text-center"
      }
      to={destination}
    >
      <span className={"font-bold text-black"}>{children}</span>
    </NavLink>
  );
}
