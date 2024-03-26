import { Terminal } from "@/features/home/Terminal.tsx";
import { Button } from "@/components/common/ui/button.tsx";
import { GridBackground } from "@/components/aceternity/GridBackground.tsx";
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
        <section className="mx-auto flex max-w-[1400px] flex-col items-center justify-between  gap-20 px-5  pb-32 pt-16 sm:flex-row  ">
          <div
            className={
              " z-50 max-w-[30rem] text-center font-bold sm:text-start"
            }
          >
            <h1 className={" mb-6 text-5xl  md:text-6xl"}>
              Your Gateway to Innovation
            </h1>
            <p className={"mb-14 text-sm  text-gray-primary md:text-base"}>
              Welcome to my world of creativity and code, where every line
              brings ideas to life.
            </p>
            <Button onClick={collaborateHandler}>Let's Collaborate</Button>
          </div>
          <Terminal />
        </section>
      </RevealCenter>
    </GridBackground>
  );
}
