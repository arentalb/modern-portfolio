import { Button } from "@/components/common/ui/button.tsx";
import { Link } from "react-router-dom";
import { Spotlight } from "@/components/common/aceternity/SpotLight.tsx";
import { ReactTyped } from "react-typed";

export function CertificateSection() {
  return (
    <>
      <section className=" px-5  pt-36 pb-12 md:max-w-[1400px] mx-auto ">
        <Spotlight className={""} fill={"white"} />
        <div
          className={"flex justify-between  items-center flex-col sm:flex-row"}
        >
          <div className={"text-center sm:text-start"}>
            <h1 className={"text-4xl font-bold mb-6 z-20"}>
              Showcasing my Achievements
            </h1>
            <p
              className={
                "text-sm  text-gray-primary mb-14 sm:max-w-[500px] z-20"
              }
            >
              Explore a collection of certifications that validate my skills and
              dedication to continuous learning. Each certificate represents a
              milestone in my professional journey.
            </p>
            <Link to={""}>
              <Button className={"z-20"}>View All Certificates</Button>
            </Link>
          </div>
          <div className={"max-w-[400px]"}>
            <img
              src="/images/cirtificate%20card.svg"
              alt=""
              className={"max-w[200px]"}
            />
          </div>
        </div>
      </section>
      <section className={"relative  overflow-hidden pt-32 pb-64"}>
        <div
          className={
            "bg-white text-black -rotate-6 text-2xl sm:text-4xl scale-110 text-center py-5 font-shadow italic font-bold"
          }
        >
          <ReactTyped
            startDelay={50}
            startWhenVisible
            stopped
            strings={["Elevate Your Skills Beyond Paper"]}
            typeSpeed={50}
          />
        </div>
      </section>
    </>
  );
}
