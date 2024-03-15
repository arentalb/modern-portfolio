import { SparklesCore } from "@/components/common/aceternity/Sparkles.tsx";

export function ComingSoon({ text }) {
  return (
    <section className=" px-5 pt-8  pb-32 sm:pt-12 md:max-w-[1400px] mx-auto flex flex-col justify-between gap-20 items-center sm:flex-row ">
      <div
        className={
          "flex flex-col items-center text-center mt-8 sm:items-start sm:text-start sm:max-w-96"
        }
      ></div>
      <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="md:text-7xl text-4xl lg:text-9xl font-bold text-center text-white relative z-20">
          {text}
        </h1>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
    </section>
  );
}
