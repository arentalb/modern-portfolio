import { Header } from "@/components/Header.tsx";
import { Footer } from "@/components/Footer.tsx";
import { ProjectDetailHeroSection } from "@/features/projects/project detail sections/ProjectDetailHeroSection.tsx";
import { ProjectDetailDescriptionSection } from "@/features/projects/project detail sections/ProjectDetailDescriptionSection.tsx";
import { ProjectsDetailsSection } from "@/features/projects/project detail sections/ProjectsDetailsSection.tsx";
import { BrightLine } from "@/components/common/BrightLine.tsx";
import { useParams } from "react-router";
import { ProjectTypes } from "@/types/Project.types.ts";

const data: ProjectTypes[] = [
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "A dynamic website showcasing my skills, projects, and experience.",
    longDescription:
      "My personal portfolio website was built to highlight my journey as a developer. It includes detailed project descriptions, a 'Skills' section showcasing my technical proficiencies, a downloadable resume, and a contact form for potential employers or collaborators.", // More in-depth
    level: "Beginner",
    link: "/project/1",
    imageURL: "/projects/project1.svg",
    technologies: [
      {
        name: "HTML",
        link: "https://",
      },
      {
        name: "CSS",
        link: "https://",
      },
      {
        name: "JavaScript",
        link: "https://",
      },
      {
        name: "Node.js",
        link: "https://",
      },
      {
        name: "Express.js",
        link: "https://",
      },
    ],
    libraries: [
      {
        name: "Stripe",
        link: "https://",
      },
      {
        name: "ladash",
        link: "https://",
      },
    ],
    repository: [
      {
        name: "Front End",
        link: "https://github.com/your-username/mini-ecommerce",
      },
    ],
    liveLink: "https://github.com/your-username/mini-ecommerce",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "Fetches real-time weather data and displays it with a clean UI.",
    longDescription:
      "This app integrates with a weather API to provide up-to-date forecasts. Features include current conditions, 5-day forecasts, an interactive map, and the ability to search by location. I implemented user friendly error-handling and loading states to enhance the user experience.",
    level: "Intermediate",
    link: "/project/2",
    imageURL: "/projects/project2.svg",
    technologies: [
      {
        name: "HTML",
        link: "https://",
      },
      {
        name: "CSS",
        link: "https://",
      },
      {
        name: "JavaScript",
        link: "https://",
      },
      {
        name: "Node.js",
        link: "https://",
      },
      {
        name: "Express.js",
        link: "https://",
      },
    ],
    libraries: [
      {
        name: "Stripe",
        link: "https://",
      },
      {
        name: "ladash",
        link: "https://",
      },
    ],
    repository: [
      {
        name: "Front End",
        link: "https://github.com/your-username/mini-ecommerce",
      },
    ],
    liveLink: "https://github.com/your-username/mini-ecommerce",
  },
  {
    id: 3,
    title: "Restaurant Website",
    description:
      "Attractive website for a restaurant, with menus, reservations, and image gallery.",
    longDescription:
      "Designed with a focus on visual appeal and user experience, this website features high-quality food photography, an intuitive menu layout, and an optional online reservation system powered by a third-party integration. I also implemented image optimization for fast loading times.",
    level: "Intermediate",
    link: "/project/3",
    imageURL: "/projects/project3.svg",
    technologies: [
      {
        name: "HTML",
        link: "https://",
      },
      {
        name: "CSS",
        link: "https://",
      },
      {
        name: "JavaScript",
        link: "https://",
      },
      {
        name: "Node.js",
        link: "https://",
      },
      {
        name: "Express.js",
        link: "https://",
      },
    ],
    libraries: [
      {
        name: "Stripe",
        link: "https://",
      },
      {
        name: "ladash",
        link: "https://",
      },
    ],
    repository: [
      {
        name: "Front End",
        link: "https://github.com/your-username/mini-ecommerce",
      },
    ],
    liveLink: "https://github.com/your-username/mini-ecommerce",
  },
  {
    id: 4,
    title: "Interactive Quiz Game",
    description:
      "A fun trivia game with multiple categories and difficulty levels.",
    longDescription:
      "This quiz game utilizes dynamic question generation from an API or a custom data set. It likely features a scoring system, progress tracking, and possibly user accounts or leaderboards for added competitiveness.",
    level: "Advanced",
    link: "/project/4",
    imageURL: "/projects/project4.svg",
    technologies: [
      {
        name: "HTML",
        link: "https://",
      },
      {
        name: "CSS",
        link: "https://",
      },
      {
        name: "JavaScript",
        link: "https://",
      },
      {
        name: "Node.js",
        link: "https://",
      },
      {
        name: "Express.js",
        link: "https://",
      },
    ],
    libraries: [
      {
        name: "Stripe",
        link: "https://",
      },
      {
        name: "ladash",
        link: "https://",
      },
    ],
    repository: [
      {
        name: "Front End",
        link: "https://github.com/your-username/mini-ecommerce",
      },
    ],
    liveLink: "https://github.com/your-username/mini-ecommerce",
  },
  {
    id: 5,
    title: "E-commerce Store (Mini)",
    description:
      "Basic store with product listings, shopping cart, and checkout functionality. ",
    longDescription:
      "This e-commerce store focuses on the core concepts of online shopping. Features likely include product management, a shopping cart system with quantity management, a simplified checkout process, and potentially basic payment gateway integration.",
    level: "Advanced",
    link: "/project/5",
    imageURL: "/projects/project1.svg",
    technologies: [
      {
        name: "HTML",
        link: "https://",
      },
      {
        name: "CSS",
        link: "https://",
      },
      {
        name: "JavaScript",
        link: "https://",
      },
      {
        name: "Node.js",
        link: "https://",
      },
      {
        name: "Express.js",
        link: "https://",
      },
    ],
    libraries: [
      {
        name: "Stripe",
        link: "https://",
      },
      {
        name: "ladash",
        link: "https://",
      },
    ],
    repository: [
      {
        name: "Front End",
        link: "https://github.com/your-username/mini-ecommerce",
      },
    ],
    liveLink: "https://github.com/your-username/mini-ecommerce",
  },
];

export function ProjectDetailPage() {
  const params = useParams();
  const project = data.find((project) => project.id === Number(params.id));

  let content: JSX.Element;
  content = (
    <>
      <ProjectDetailHeroSection project={project} />
      <BrightLine />
      <ProjectDetailDescriptionSection project={project} />
      <ProjectsDetailsSection project={project} />
    </>
  );
  if (isNaN(Number(params.id))) {
    content = (
      <section className=" mx-auto mb-40  min-h-full max-w-[1400px] px-5 pt-20 text-center sm:px-5 sm:pt-20">
        <h1 className={" mb-8   text-3xl md:text-4xl"}>Project Not Found</h1>
      </section>
    );
  }
  if (!project) {
    content = (
      <section className="mx-auto mb-40  min-h-full max-w-[1400px] px-5 pt-20 text-center sm:px-5 sm:pt-20">
        <h1 className={"mb-8 text-3xl md:text-4xl"}>Project Not Found</h1>
      </section>
    );
  }

  return (
    <>
      <Header />
      {content}
      <Footer />
    </>
  );
}
