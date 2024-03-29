import { useEffect } from "react";

export function useScrollBlocker(condition: boolean): null {
  useEffect(() => {
    if (condition) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [condition]);
  return null;
}
