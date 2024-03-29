import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface RevealCenterProps {
  children: React.ReactNode;
  delay?: number;
}

export function RevealCenter({ children, delay = 0 }: RevealCenterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControl = useAnimation();
  useEffect(
    function () {
      if (isInView) {
        mainControl.start("visible");
      }
    },
    [isInView, mainControl],
  );
  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial={"hidden"}
        animate={mainControl}
        transition={{
          duration: 0.8,
          delay: delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
