import { Button } from "@/components/common/ui/button.tsx";
import { Link } from "react-router-dom";

export function CertificateSection() {
  return (
    <>
      <section className=" px-5  pt-36 pb-12 md:max-w-[1400px] mx-auto">
        <div
          className={"flex justify-between  items-center flex-col sm:flex-row"}
        >
          <div className={"text-center sm:text-start"}>
            <h1 className={"text-4xl font-bold mb-6"}>
              Showcasing my Achievements
            </h1>
            <p className={"text-sm  text-gray-primary mb-14 sm:max-w-[500px] "}>
              Explore a collection of certifications that validate my skills and
              dedication to continuous learning. Each certificate represents a
              milestone in my professional journey.
            </p>
            <Link to={""}>
              <Button>View All Certificates</Button>
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
      <section className={"relative  py-32 overflow-hidden"}>
        <div
          className={
            "bg-white text-black -rotate-6 text-2xl sm:text-4xl scale-110 text-center py-5 font-shadow italic font-bold"
          }
        >
          Elevate Your Skills Beyond Paper
        </div>
      </section>
    </>
  );
}
