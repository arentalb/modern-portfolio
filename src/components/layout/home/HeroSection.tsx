import { Terminal } from "@/components/common/Terminal.tsx";
import { Button } from "@/components/common/ui/button.tsx";
import { GridBackground } from "@/components/common/aceternity/GridBackground.tsx";
import { animateScroll } from "react-scroll";
import { RevealCenter } from "@/components/animations/RevealCenter.tsx";

export function HeroSection() {
  const collaborateHandler = () => {
    const options = {
      duration: 8000,
      smooth: true,
    };
    animateScroll.scrollToBottom(options);
  };

  return (
    <GridBackground>
      <RevealCenter>
        <section className=" mx-auto flex flex-col    items-center justify-between  gap-20 px-5  pb-32 pt-8 sm:flex-row sm:pt-12 md:max-w-[1400px]  ">
          <div
            className={
              "mt-8 flex flex-col items-center text-center sm:max-w-96 sm:items-start sm:text-start"
            }
          >
            <h1 className={"z-50 mb-6 text-5xl font-bold"}>
              Your Gateway to Innovation
            </h1>
            <p className={" z-50 mb-14 text-sm font-bold text-gray-primary"}>
              Welcome to my world of creativity and code, where every line
              brings ideas to life.
            </p>
            <Button onClick={collaborateHandler} className={"z-50"}>
              Let's Collaborate
            </Button>
          </div>
          <Terminal />
        </section>
      </RevealCenter>
    </GridBackground>
  );
}
