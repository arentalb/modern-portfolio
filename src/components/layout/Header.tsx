import { NavLink, To } from "react-router-dom";
import { ReactNode, useState } from "react";
import { Toast } from "@/components/common/Toast.tsx";

interface NavItemProps {
  to: To;
  children?: ReactNode;
  icon?: string;
}

export function Header() {
  const [menu, setMenu] = useState(false);

  function toggleMenu() {
    setMenu((prev) => !prev);
  }

  return (
    <header className="p-5  md:max-w-[1400px] mx-auto">
      <div
        className={`flex justify-between md:mb-0 ${menu ? "mb-10" : "mb-0"}`}
      >
        <NavItem to={"/"}>
          <img src="/images/logo.svg" alt="Aren Logo" />
        </NavItem>
        <img
          src="/icons/menu.svg"
          alt="Burger Menu"
          onClick={toggleMenu}
          className="sm:hidden cursor-pointer"
        />

        <nav className="w-full justify-end items-center text-2xl font-bold hidden sm:flex">
          <ul className="flex gap-10 items-center justify-end text-lg">
            <NavItems />
          </ul>
        </nav>
      </div>

      <nav
        className={`w-full flex flex-col items-center text-2xl font-bold justify-between sm:hidden ${
          menu ? "flex" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-10 items-center">
          <NavItems />
        </ul>
      </nav>
    </header>
  );
}

function NavItem({ to, children, icon }: NavItemProps) {
  return (
    <li className="flex items-center">
      <NavLink
        to={to}
        className={({ isActive }: { isActive: boolean }) =>
          isActive ? "text-gray-primary" : undefined
        }
      >
        {children}
      </NavLink>
      {icon && <img src={icon} alt={children as string} />}
    </li>
  );
}

function NavItems() {
  return (
    <>
      <NavItem to="/article">Article</NavItem>
      {/*<NavItem to="/tutorial">Tutorial</NavItem>*/}
      {/*<NavItem to="/course">Course</NavItem>*/}
      <TerminalIcon />
    </>
  );
}

function TerminalIcon() {
  const [showToast, setShowToast] = useState(false);

  return (
    <>
      {showToast ? (
        <Toast toggleHandler={() => setShowToast(false)}>
          Not Available at this time
        </Toast>
      ) : (
        ""
      )}
      <img src="/icons/termina.svg" alt="" onClick={() => setShowToast(true)} />
    </>
  );
}
