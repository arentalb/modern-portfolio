import { BrightLine } from "@/components/common/BrightLine.tsx";
import { Link } from "react-router-dom";

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
          <p className={"text-gray-primary text-xs font-bold mb-2"}>
            Designed and Developed By
          </p>
          <p className={"font-bold text-2xl "}>Aren Talb </p>
        </div>
        <div className={"sm:flex justify-center items-center hidden"}>
          <Link to={"/"}>
            <img src="/images/logo.svg" alt="" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
