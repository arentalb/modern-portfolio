import { Button } from "@/components/common/ui/button.tsx";
import { Link } from "react-router-dom";

interface ProjectProp {
  title: string;
  description: string;
  link: string;
}

const projectData: ProjectProp[] = [
  {
    title: "Online Marketplace Platform",
    description:
      "An e-commerce platform developed using React and Node.js, enabling users to browse, buy, and sell products securely. Integrated with payment gateways for seamless transactions.  ",
    link: "https://github.com/arentalb/shoply-angular",
  },
  // {
  //   title: "Collaborative Task Manager",
  //   description:
  //     "Developed using Angular and Flask, this project focuses on efficient task management for teams. It includes features for creating, assigning, and tracking tasks, real-time collaboration, and integration with popular productivity tools.",
  //   link: "https://github.com/arentalb/taskmanger-angular",
  // },
  // {
  //   title: "Event Ticketing System",
  //   description:
  //     "A full-stack application using React and Express that facilitates the creation, promotion, and sale of event tickets. It includes features such as seat selection, secure payment processing, and event analytics for organizers.",
  //   link: "https://github.com/arentalb/Fintell-css",
  // },
];

export function ProjectSection() {
  return (
    <section className=" px-5   py-12 md:max-w-[1400px] mx-auto">
      <div className={"flex justify-center flex-col items-center mb-24"}>
        <p
          className={
            "text-base text-center font-bold text-gray-primary mb-14 max-w-[75%] sm:max-w-[500px] "
          }
        >
          Dive into the diverse range of projects that showcase my skills and
          passion for innovation.
        </p>
        <Button className={"font-bold"}>
          <Link to={"https://github.com/arentalb/"}>View All Projects</Link>
        </Button>
      </div>
      <Projects />
    </section>
  );
}

function Projects() {
  return (
    <div className={"flex gap-4"}>
      {projectData.map((pro) => (
        <Project project={pro} key={pro.title} />
      ))}
    </div>
  );
}

interface ProjectComponentProps {
  project: ProjectProp;
}

function Project({ project }: ProjectComponentProps) {
  return (
    <div
      className={
        "flex flex-col items-start justify-between border border-white p-2 rounded-3xl px-6 pt-10 pb-6 w-full sm:w-1/2 md:w-1/3"
      }
    >
      <div>
        <p className={"text-3xl font-bold mb-6"}> {project.title}</p>
        <p className={"text-sm font-semibold mb-12"}>{project.description}</p>
      </div>
      <div className={"flex w-full justify-end  "}>
        <Link to={project.link}>
          <img src="/icons/github-project.svg" alt="" />
        </Link>
      </div>
    </div>
  );
}
