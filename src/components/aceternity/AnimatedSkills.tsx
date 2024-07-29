"use client";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { TSkills } from "@/data/skills.ts";

export const AnimatedSkills = ({ items }: { items: TSkills[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [0, 0], [-50, 50]),
    springConfig,
  );
  const handleMouseMove = (event: React.MouseEvent<HTMLImageElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {items.map((item) => (
        <div
          className=" relative flex items-center justify-center rounded-3xl border-2 border-white p-4 "
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="wait">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute  -left-14  -top-16  translate-x-1/2 sm:-left-16 "
              >
                {/*<div className="absolute inset-x-10 z-30 w-[20%]  -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />*/}
                {/*<div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />*/}
                <div
                  className={
                    " z-50 w-[100px] rounded-md bg-white px-4 py-2 text-sm font-bold text-black shadow-xl sm:w-[130px] sm:text-base md:text-lg"
                  }
                >
                  <p>{item.name}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <img
            onMouseMove={handleMouseMove}
            src={item.url}
            alt={item.name}
            className="relative  w-12  object-cover object-top  transition duration-500   group-hover:z-30 group-hover:scale-105 md:w-16"
          />
        </div>
      ))}
    </>
  );
};
