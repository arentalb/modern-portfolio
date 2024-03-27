import { NavLink, To } from "react-router-dom";
import React, { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useScrollBlocker } from "@/hooks/useScrollBlocker.tsx";

interface NavItemProps {
  to: To;
  children?: ReactNode;
  icon?: string;
}

export function Header() {
  const [menu, setMenu] = useState(false);
  useScrollBlocker(menu);

  function toggleMenu() {
    setMenu((prev) => !prev);
  }

  const variant = {
    open: { opacity: 1, rotate: 0 },
    closed: { opacity: 1, rotate: 90 },
  };

  return (
    <header className={" mx-auto max-w-[1400px]  p-5"}>
      <div className={"flex justify-between"}>
        <NavItem to={"/"}>
          <img src="/images/logo.svg" alt="Aren Logo" />
        </NavItem>

        <motion.img
          src={`/icons/${menu ? "close" : "menu"}.svg`}
          onClick={toggleMenu}
          alt={`/icons/${menu ? "Close Menu" : "Burger Menu"}.svg`}
          className=" h-8  w-8  cursor-pointer  sm:hidden"
          variants={variant}
          initial="open"
          animate={menu ? "closed" : "open"}
          transition={{ duration: 0.4 }}
        />

        <nav className="hidden w-full items-center justify-end text-2xl font-bold sm:flex">
          <ul className="flex items-center justify-end gap-10 text-lg">
            <NavItems />
          </ul>
        </nav>
      </div>
      <AnimatePresence>
        {menu ? (
          <motion.nav
            className={`fixed z-[100] flex h-screen w-screen flex-col items-center justify-between bg-black pt-32 text-2xl font-bold sm:hidden`}
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.4 }}
          >
            <motion.ul
              className="flex h-screen flex-col items-center gap-14"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <NavItems />
            </motion.ul>
          </motion.nav>
        ) : (
          ""
        )}
      </AnimatePresence>
    </header>
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
