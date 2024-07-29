import { Colors, Technology } from "./constants.ts";

export interface TProject {
  id: number;
  title: string;
  description: string;
  additional?: string;
  imagePath: string;
  recent: boolean;
  links: Array<{
    name: string;
    link: string;
  }>;
  stack: Array<{
    name: Technology;
    color: Colors;
  }>;
}

export const Projects: TProject[] = [
  {
    id: 1,
    title: "Store",
    description:
      "Store Online is an e-commerce platform where users can browse, search, and order electronic and other products. The site features a user-friendly interface for customers and a comprehensive dashboard for admins to manage inventory, orders, and user accounts.",
    additional:
      "You can test it with this user [ Email:ahmad@gmail.com Password:Password123$ ]  and this admin [ Email:arentalb@gmail.com Password:Password123$ ] ",
    imagePath: "/projects/Store.png",
    recent: true,
    links: [
      {
        name: "Live",
        link: "https://store-front-3fxx.onrender.com",
      },
      {
        name: "Front-end Repository",
        link: "https://github.com/arentalb/store-front",
      },
      {
        name: "Back-end Repository",
        link: "https://github.com/arentalb/store-back",
      },
    ],
    stack: [
      {
        name: Technology.React,
        color: Colors.React,
      },
      {
        name: Technology.Tailwind,
        color: Colors.Tailwind,
      },
      {
        name: Technology.TypeScript,
        color: Colors.TypeScript,
      },
      {
        name: Technology.NodeJS,
        color: Colors.NodeJS,
      },
      {
        name: Technology.Express,
        color: Colors.Express,
      },
      {
        name: Technology.MongoDB,
        color: Colors.MongoDB,
      },
      {
        name: Technology.Redux,
        color: Colors.Redux,
      },
      {
        name: Technology.RTKQuery,
        color: Colors.RTKQuery,
      },
      {
        name: Technology.DaisyUI,
        color: Colors.DaisyUI,
      },
    ],
  },
  {
    id: 2,
    title: "Shoply Your First Choice",
    description:
      "Shoply, your trusted online shopping destination, offers a secure, easy, and enjoyable way to buy everyday essentials and more. Enjoy a seamless shopping experience with a user-friendly interface and access to a wide range of products at competitive prices.",
    imagePath: "/projects/Shoply.png",
    recent: false,
    links: [
      {
        name: "Front-end Repository",
        link: "https://github.com/arentalb/shoply-angular?tab=readme-ov-file",
      },
      {
        name: "Live",
        link: "https://shoply-aren.netlify.app/products",
      },
    ],
    stack: [
      {
        name: Technology.Angular,
        color: Colors.Angular,
      },
      {
        name: Technology.Tailwind,
        color: Colors.Tailwind,
      },
      {
        name: Technology.TypeScript,
        color: Colors.TypeScript,
      },
    ],
  },
  {
    id: 3,
    title: "Get Things Done",
    description:
      "This app allows users to manage tasks by adding, deleting, editing, and viewing tasks. Users can sign up, log in to access their own task lists, and view their profiles.",
    imagePath: "/projects/GetThingsDone.png",
    recent: false,
    links: [
      {
        name: "Front-end Repository",
        link: "https://github.com/arentalb/taskmanger-angular",
      },
      {
        name: "Live",
        link: "https://taskmanger-30570.web.app/login",
      },
    ],
    stack: [
      {
        name: Technology.Angular,
        color: Colors.Angular,
      },
      {
        name: Technology.Tailwind,
        color: Colors.Tailwind,
      },
      {
        name: Technology.TypeScript,
        color: Colors.TypeScript,
      },
    ],
  },
  {
    id: 4,
    title: "Memory Lane",
    description:
      "Memory Lane is a platform for travelers to capture and store their memories from different locations. Users can sign up, log in, and then add, edit, delete, and view memories" +
      " associated with specific places. Each memory includes photos, descriptions, and tags.",
    imagePath: "/projects/MemoryLane.png",
    recent: false,
    links: [
      {
        name: "Front-end Repository",
        link: "https://github.com/arentalb/memories-front",
      },
      {
        name: "Back-end Repository",
        link: "https://github.com/arentalb/memories-back",
      },
    ],
    stack: [
      {
        name: Technology.React,
        color: Colors.React,
      },
      {
        name: Technology.Tailwind,
        color: Colors.Tailwind,
      },
      {
        name: Technology.TypeScript,
        color: Colors.TypeScript,
      },
      {
        name: Technology.NodeJS,
        color: Colors.NodeJS,
      },
      {
        name: Technology.Express,
        color: Colors.Express,
      },
      {
        name: Technology.MongoDB,
        color: Colors.MongoDB,
      },
    ],
  },
  {
    id: 5,
    title: "Magnifico",
    description:
      "MERN Multilingual is an app that displays text and images in two languages. It features a user-friendly interface and an admin dashboard for easy content management across languages.",
    imagePath: "/projects/Magnifico.png",
    recent: true,
    links: [
      {
        name: "Front-end Repository",
        link: "https://github.com/arentalb/cms-front",
      },
      {
        name: "Back-end Repository",
        link: "https://github.com/arentalb/cms-back",
      },
    ],
    stack: [
      {
        name: Technology.React,
        color: Colors.React,
      },
      {
        name: Technology.Tailwind,
        color: Colors.Tailwind,
      },
      {
        name: Technology.NodeJS,
        color: Colors.NodeJS,
      },
      {
        name: Technology.Express,
        color: Colors.Express,
      },
      {
        name: Technology.MongoDB,
        color: Colors.MongoDB,
      },
      {
        name: Technology.I18Next,
        color: Colors.I18Next,
      },
    ],
  },
  {
    id: 6,
    title: "Book Store",
    description:
      "Welcome to the University Bookstore Web Project! The application provides features for browsing books, managing inventory, processing orders, and more.",
    imagePath: "/projects/Bookstore.png",
    recent: true,
    links: [
      {
        name: "Front-end Repository",
        link: "https://github.com/arentalb/bookstore-front",
      },
      {
        name: "Back-end Repository",
        link: "https://github.com/arentalb/bookstore-back",
      },
    ],
    stack: [
      {
        name: Technology.Angular,
        color: Colors.Angular,
      },
      {
        name: Technology.Tailwind,
        color: Colors.Tailwind,
      },
      {
        name: Technology.NodeJS,
        color: Colors.NodeJS,
      },
      {
        name: Technology.Express,
        color: Colors.Express,
      },
      {
        name: Technology.MongoDB,
        color: Colors.MongoDB,
      },
      {
        name: Technology.DaisyUI,
        color: Colors.DaisyUI,
      },
      {
        name: Technology.TypeScript,
        color: Colors.TypeScript,
      },
    ],
  },
];
