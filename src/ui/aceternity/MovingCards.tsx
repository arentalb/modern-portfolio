import { cn } from "@/utils/utils.ts";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const MovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " mb-24 flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4 ",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item) => (
          <Project project={item} key={item.title} />
        ))}
      </ul>
    </div>
  );
};

interface ProjectProp {
  title: string;
  description: string;
  link: string;
}

interface ProjectComponentProps {
  project: ProjectProp;
}

function Project({ project }: ProjectComponentProps) {
  return (
    <div
      className={
        "flex max-w-[300px] flex-col items-start justify-between rounded-3xl border border-white p-2 px-6 pb-6  pt-10 sm:max-w-[600px]"
      }
    >
      <div>
        <p className={"mb-6 text-2xl font-bold sm:text-3xl"}>{project.title}</p>
        <p className={"mb-12 block text-xs font-semibold leading-5 sm:hidden"}>
          {textShortner(project.description, 20)}
        </p>
        <p className={"mb-12 hidden text-sm font-semibold leading-6 sm:block"}>
          {textShortner(project.description, 40)}
        </p>
      </div>
      <div className={"flex w-full justify-end  "}>
        <Link to={project.link}>
          <img src="/icons/github-project.svg" alt="" />
        </Link>
      </div>
    </div>
  );
}

function textShortner(text: string, lenght: number) {
  const shortenedText = text.split(" ").slice(0, lenght).join(" ");
  return shortenedText + (text.split(" ").length > lenght ? " ..." : "");
}
