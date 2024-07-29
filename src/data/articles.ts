import { Technology } from "./constants.ts";

export interface TArticle {
  id: number;
  title: string;
  description: string;
  recent: boolean;
  link: string;
  technology: Technology[];
}

export const Articles: TArticle[] = [
  {
    id: 1,
    title: "What is Context API in React , How use it with Typescript?",
    description:
      "The Context API offers a mechanism within React to share data across various components in your application without the need to manually pass props down through multiple levels",
    recent: true,
    link: "https://medium.com/@aren.talb00/what-is-context-api-in-react-how-use-it-5360fc36da91",
    technology: [Technology.React, Technology.FrontEnd],
  },
  {
    id: 2,
    title: "Creating a Custom File Input Using React\n",
    description:
      "When building web applications, a common requirement is the need for users to upload files. React makes handling file inputs smoother, especially when combined with hooks like useRef and useState.",
    recent: true,
    link: "https://medium.com/@aren.talb00/creating-a-custom-file-input-using-react-and-useref-233f5d4abfc9",
    technology: [Technology.React, Technology.JavaScript, Technology.FrontEnd],
  },
  {
    id: 3,
    title:
      "Getting Started with Redux Toolkit for State Management in React Applications\n",
    description:
      "Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development.",
    recent: false,
    link: "https://medium.com/@aren.talb00/getting-started-with-redux-toolkit-for-state-management-in-react-applications-9c0df37907cf",
    technology: [Technology.React, Technology.JavaScript],
  },
  {
    id: 4,
    title:
      "Getting Started with RTK Query for Managing Remote State in React Applications\n",
    description:
      "Managing state in modern web applications can often be complex and cumbersome, especially when dealing with asynchronous data like API requests.",
    recent: true,
    link: "https://medium.com/@aren.talb00/efficiently-managing-state-in-todo-applications-with-redux-toolkit-query-4ec744bf9881",
    technology: [Technology.BackEnd, Technology.MongoDB],
  },
];
