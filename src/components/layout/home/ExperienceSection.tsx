import { Link } from "react-router-dom"; // import { calsans } from "@/fonts/calsans";
import { TracingBeam } from "@/components/common/aceternity/TracingBeam.tsx";
import { RevealCenter } from "@/components/animations/RevealCenter.tsx";

interface ExperienceProp {
  title: string;
  date: string;
  description: string;
  link: string;
}

const ExperienceData: ExperienceProp[] = [
  {
    title: "Frontend Developer - Kitn for IT Solution",
    date: "March 2024 - Present",
    description:
      'As a Frontend Developer at Kitn for IT Solution, I had the opportunity to work on an exciting project called "Pweist." This project involved developing a multi-user system management application designed specifically for markets.',
    link: "https://kitn.net/",
  },
  {
    title: "Team Member - Bnchina & Bnchina Academy",
    date: "January 2024 - Present",
    description:
      "As a team member at Bnchina & Bnchina Academy since January 2024, I have been part of an exciting journey to revolutionize responsible software development. At Bnchina, we ignite careers and encourage our team members to lead the way in transforming the industry. Our mission is to seamlessly bridge the gap left by uninspiring designs, ensuring that every interaction reflects innovation and user-centric excellence.",
    link: "https://bnchina.co/",
  },
  {
    title: "Independent Technology Practice",
    date: "January 2020 - Present",
    description:
      "During my independent technology practice from 2020 to now, I engaged in diverse projects spanning software development, web design, consulting, and research. This period fostered autonomy, creativity, and continuous learning, allowing me to deliver tailored solutions while pushing the boundaries of innovation in technology.",
    link: "https://github.com/arentalb",
  },
];

export function ExperienceSection() {
  return (
    <RevealCenter delay={0.3}>
      <section className=" px-5   py-12 md:max-w-[1400px] mx-auto pb-32 ">
        <div className={"flex justify-center flex-col items-center mb-16"}>
          <h1 className={"text-4xl font-bold mb-6 text-center"}>
            From Projects to Progress
          </h1>
          <p
            className={
              "text-sm text-center text-gray-primary mb-14 sm:max-w-[500px] "
            }
          >
            Explore the dynamic chapters of my career
          </p>
        </div>
        <Experiences />
      </section>
    </RevealCenter>
  );
}

function Experiences() {
  return (
    <TracingBeam className="px-6">
      <div className=" mx-auto antialiased pt-4 relative flex gap-24 flex-col w-full">
        {ExperienceData.map((item) => (
          <Experience experience={item} key={item.title} />
        ))}
      </div>
    </TracingBeam>
  );
}

interface ExperienceComponentProps {
  experience: ExperienceProp;
}

function Experience({ experience }: ExperienceComponentProps) {
  return (
    <div
      className={
        "ml-4 border-2 border-white rounded-3xl  w-full px-6 py-8 sm:px-16 sm:py-14   flex  justify-between "
      }
    >
      <div>
        <p className={"font-bold text-2xl mb-16 sm:mb-6 sm:text-3xl"}>
          {experience.title}
        </p>
        <p
          className={
            "text-base text-gray-primary sm:mb-14 sm:font-bold sm:text-lg"
          }
        >
          {experience.date}
        </p>
        <p className={"hidden sm:block sm:max-w-[750px]"}>
          {experience.description}
        </p>
      </div>
      <div className={" min-w-6 max-w-8  flex  items-end sm:items-start"}>
        <Link to={experience.link}>
          <img src="/icons/externalLink.svg" alt="" />
        </Link>
      </div>
    </div>
  );
}
