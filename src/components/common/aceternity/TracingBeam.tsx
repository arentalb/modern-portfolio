"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils.ts";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    },
  );
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [50, svgHeight]), {
    stiffness: 500,
    damping: 90,
  });

  return (
    <motion.div
      ref={ref}
      className={cn(
        "relative w-full md:max-w-[1300px] mx-auto h-full",
        className,
      )}
    >
      <div className="absolute -left-4 sm:-left-8 2xl:-left-20 top-3">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          className="ml-[35px] sm:ml-[27px] h-4 w-4 sm:w-8 sm:h-8 rounded-full border bg-white border-netural-200 shadow-sm flex items-center justify-center"
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor: scrollYProgress.get() > 0 ? "white" : "#0080ff",
              borderColor: scrollYProgress.get() > 0 ? "white" : "#00edff",
            }}
            className="h-2 w-2 sm:w-4 sm:h-4 rounded-full border border-neutral-300 bg-blue-400"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight} // Set the SVG height
          className=" ml-6 block"
          aria-hidden="true"
        >
          {/*d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}*/}
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.2} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.2} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="4.25"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1} // set y1 for gradient
              y2={y2} // set y2 for gradient
            >
              <stop stopColor="#00edff" stopOpacity="0"></stop>
              <stop stopColor="#00edff"></stop>
              <stop offset="0.325" stopColor="#99CBFF "></stop>
              <stop offset="1" stopColor="#99CBFF" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
