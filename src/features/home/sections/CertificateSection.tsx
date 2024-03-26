import { Button } from "@/components/common/ui/button.tsx";
import { Link } from "react-router-dom";
import { Spotlight } from "@/components/aceternity/SpotLight.tsx";
import { ReactTyped } from "react-typed";
import { RevealCenter } from "@/components/animations/RevealCenter.tsx";

export function CertificateSection() {
  return (
    <>
      <RevealCenter>
        <section className="mx-auto max-w-[1400px] px-5 py-32 ">
          <Spotlight className={""} fill={"white"} />
          <div
            className={
              "flex flex-col  items-center justify-between sm:flex-row"
            }
          >
            <div className={"text-center font-bold sm:text-start"}>
              <h1 className={" mb-6 text-4xl "}>Showcasing my Achievements</h1>
              <p
                className={"mb-14 text-sm  text-gray-primary sm:max-w-[500px]"}
              >
                Explore a collection of certifications that validate my skills
                and dedication to continuous learning. Each certificate
                represents a milestone in my professional journey.
              </p>
              <Link to={"/certificates"}>
                <Button>View All Certificates</Button>
              </Link>
            </div>
            <div className={"max-w-[300px] md:max-w-[400px]"}>
              <img src="/images/cirtificate%20card.svg" alt="cirtificate" />
            </div>
          </div>
        </section>
        <section
          className={"relative overflow-hidden pb-44 pt-16 sm:pb-64 sm:pt-32"}
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
