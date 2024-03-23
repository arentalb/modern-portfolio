import { BrightLine } from "@/ui/common/BrightLine.tsx";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="mx-auto  p-5 md:max-w-[1400px] ">
      <div className={"mb-8"}>
        <BrightLine
          gradient={
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(0,237,255,1) 48%, rgba(255,255,255,0) 100%)"
          }
        />
      </div>
      <div
        className={
          "flex flex-col-reverse items-center justify-between gap-10 sm:flex-row"
        }
      >
        <div className={"flex items-center gap-8 sm:gap-4"}>
          <Link to={"https://github.com/arentalb"}>
            <img src="/icons/github.svg" alt="" />
          </Link>
          <Link to={"https://www.linkedin.com/in/aren-talb-45253a1bb/"}>
            <img src="/icons/linkedin.svg" alt="" />
          </Link>
          <Link to={"https://www.instagram.com/aren_talb/"}>
            <img src="/icons/instagram.svg" alt="" />
          </Link>
        </div>
        <div className={"text-center"}>
          <p className={"mb-2 text-xs font-bold text-gray-primary"}>
            Designed and Developed By
          </p>
          <p className={"text-2xl font-bold "}>Aren Talb </p>
        </div>
        <div className={"hidden items-center justify-center sm:flex"}>
          <Link to={"/"}>
            <img src="/images/logo.svg" alt="" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
