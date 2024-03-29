import { RevealCenter } from "@/components/animations/RevealCenter.tsx";
import { Input } from "@/components/common/ui/input.tsx";
import { Button } from "@/components/common/ui/button.tsx";
import { ProjectInterface } from "@/types/ProjectInterface.ts";
import { Project } from "@/features/projects/Project.tsx";

const data: ProjectInterface[] = [
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

export function ProjectsListSection() {
  return (
    <RevealCenter>
      <section className="mx-auto max-w-[1400px] px-5 py-20  sm:px-5 sm:py-32">
        <Search />
        <ProjectsList />
      </section>
    </RevealCenter>
  );
}

function Search() {
  return (
    <div className={"mb-20 flex items-center font-bold"}>
      <div className={"flex w-full  gap-4 text-black"}>
        <Input
          className={"text-md w-60 sm:w-80"}
          id="search"
          name="search"
          type="text"
          placeholder="React..."
        />
        <Button
          className={"text-md w-28 space-x-4 font-bold sm:w-32"}
          variant={"outline"}
        >
          search
        </Button>
      </div>
    </div>
  );
}

function ProjectsList() {
  return (
    <div className="grid grid-cols-1 justify-center gap-x-8  gap-y-16 sm:grid-cols-2 md:grid-cols-3  ">
      {data.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
}
