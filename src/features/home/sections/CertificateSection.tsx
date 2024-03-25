import { Button } from "@/ui/ui/button.tsx";
import { Link } from "react-router-dom";
import { Spotlight } from "@/ui/aceternity/SpotLight.tsx";
import { ReactTyped } from "react-typed";
import { RevealCenter } from "@/ui/animations/RevealCenter.tsx";

export function CertificateSection() {
  return (
    <>
      <RevealCenter>
        <section className=" mx-auto   px-5 py-32 md:max-w-[1400px] ">
          <Spotlight className={""} fill={"white"} />
          <div
            className={
              "flex flex-col  items-center justify-between sm:flex-row"
            }
          >
            <div className={"text-center sm:text-start"}>
              <h1 className={"z-20 mb-6 text-4xl font-bold"}>
                Showcasing my Achievements
              </h1>
              <p
                className={
                  "z-20 mb-14  text-sm  font-bold   text-gray-primary sm:max-w-[500px]"
                }
              >
                Explore a collection of certifications that validate my skills
                and dedication to continuous learning. Each certificate
                represents a milestone in my professional journey.
              </p>
              <Link to={"certificates"}>
                <Button className={"z-20 font-bold"}>
                  View All Certificates
                </Button>
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
        <section
          className={"relative  overflow-hidden pb-44 pt-16 sm:pb-64 sm:pt-32"}
        >
          <QuoteLabel />
        </section>
      </RevealCenter>
    </>
  );
}

function QuoteLabel() {
  return (
    <div
      className={
        "-rotate-6 scale-110 bg-white py-5 text-center font-shadow text-2xl font-bold italic text-black sm:text-4xl"
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
  );
}
