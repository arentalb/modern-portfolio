import { BrightLine } from "@/components/common/BrightLine.tsx";

export function Footer() {
  return (
    <footer className="p-5  md:max-w-[1400px] mx-auto ">
      <div className={"mb-8"}>
        <BrightLine
          gradient={
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(0,237,255,1) 48%, rgba(255,255,255,0) 100%)"
          }
        />
      </div>
      <div
        className={
          "flex justify-between flex-col-reverse items-center gap-10 sm:flex-row"
        }
      >
        <div className={"flex gap-8 sm:gap-4 items-center"}>
          <img src="/icons/github.svg" alt="" />
          <img src="/icons/linkedin.svg" alt="" />
          <img src="/icons/instagram.svg" alt="" />
        </div>
        <div className={"text-center"}>
          <p className={"text-gray-primary text-xs font-bold mb-2"}>
            Designed and Developed By
          </p>
          <p className={"font-bold text-2xl "}>Aren Talb </p>
        </div>
        <div className={"sm:flex justify-center items-center hidden"}>
          <img src="/images/logo.svg" alt="" />
        </div>
      </div>
    </footer>
  );
}
