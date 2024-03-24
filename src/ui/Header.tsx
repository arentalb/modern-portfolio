import { NavLink, To } from "react-router-dom";
import React, { ReactNode, useState } from "react";
import { Toast } from "@/ui/common/Toast.tsx";
import { motion } from "framer-motion";
import { animateScroll } from "react-scroll";

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
    <motion.header
      className="mx-auto p-5 md:max-w-[1400px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`flex justify-between md:mb-0 ${menu ? "mb-10" : "mb-0"}`}
      >
        <NavItem to={"/"}>
          <img src="/images/logo.svg" alt="Aren Logo" />
        </NavItem>
        {menu ? (
          <img
            src="/icons/close.svg"
            alt="Burger Menu"
            onClick={toggleMenu}
            className="h-8 w-8 cursor-pointer sm:hidden"
          />
        ) : (
          <img
            src="/icons/menu.svg"
            alt="Burger Menu"
            onClick={toggleMenu}
            className="cursor-pointer sm:hidden"
          />
        )}

        <nav className="hidden w-full items-center justify-end text-2xl font-bold sm:flex">
          <ul className="flex items-center justify-end gap-10 text-lg">
            <NavItems />
          </ul>
        </nav>
      </div>

      <motion.nav
        className={`flex w-full flex-col items-center justify-between text-2xl font-bold sm:hidden`}
        initial={{ height: 0, opacity: 0 }}
        animate={
          menu ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.5 }}
      >
        <ul className="flex flex-col items-center gap-10">
          <NavItems />
        </ul>
      </motion.nav>
    </motion.header>
  );
}

function NavItem({ to, children, icon }: NavItemProps) {
  const scrollToSection = () => {
    const options = {
      duration: 8000,
      smooth: true,
    };
    animateScroll.scrollToBottom(options);
  };

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
      <NavItem to="/projects">Projects</NavItem>
      <NavItem to="/experience">Experience</NavItem>
      <NavItem to="/article">Article</NavItem>
      {/*<NavItem to="/tutorial">Tutorial</NavItem>*/}
      {/*<NavItem to="/course">Course</NavItem>*/}
      <NavItem to="/certificates">Certificates</NavItem>

      {/*<TerminalIcon />*/}
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
