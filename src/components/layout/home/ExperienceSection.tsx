import { Link } from "react-router-dom";

interface ExperienceProp {
  title: string;
  date: string;
  description: string;
  link: string;
}

const ExperienceData: ExperienceProp[] = [
  {
    title: "Frontend Developer - Tech Innovations Ltd.",
    date: "January 2020 - Present",
    description:
      "Lead the development of responsive and user-friendly web interfaces.\n" +
      "Implemented innovative solutions that improved overall user experience.\n" +
      "Collaborated with cross-functional teams to deliver high-quality products.   ",
    link: "https://github.com/arentalb",
  },
  {
    title: "Full Stack Engineer - Innovate Tech Solutions",
    date: "June 2018 - December 2021",
    description:
      "Developed end-to-end solutions for web applications, covering both frontend and backend development , \n" +
      "Collaborated with product managers to translate business requirements into technical specifications ,\n" +
      "Implemented RESTful APIs and integrated third-party services to enhance application functionality.\n",
    link: "https://github.com/arentalb",
  },
  {
    title: "UX/UI Designer - Creative Dynamics Agency",
    date: "March 2017 - September 2019",
    description:
      "Designed intuitive and visually appealing user interfaces for various digital platforms , " +
      "Conducted user research, created wireframes, and produced interactive prototypes to validate design concepts ," +
      "Collaborated closely with developers to ensure seamless integration of design elements into the final product.",
    link: "https://github.com/arentalb",
  },
];

export function ExperienceSection() {
  return (
    <section className=" px-5   py-12 md:max-w-[1400px] mx-auto">
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
      <div className={"flex gap-4"}>
        <div className={"w-1 min-h-[600px] bg-white"}></div>
        <Experiences />
      </div>
    </section>
  );
}

function Experiences() {
  return (
    <div className={"flex gap-24 flex-col w-full"}>
      {ExperienceData.map((item) => (
        <Experience experience={item} />
      ))}
    </div>
  );
}

interface ExperienceComponentProps {
  experience: ExperienceProp;
}

function Experience({ experience }: ExperienceComponentProps) {
  return (
    <div
      className={
        "border-2 border-white rounded-3xl  px-6 py-8 sm:px-16 sm:py-14   flex  justify-between "
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
      <div className={" min-w-10 max-w-10 flex  items-end sm:items-start"}>
        <Link to={experience.link}>
          <img src="/icons/externalLink.svg" alt="" />
        </Link>
      </div>
    </div>
  );
}
