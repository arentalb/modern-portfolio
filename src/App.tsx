import { Route, Routes } from "react-router";
import { NotFoundPage } from "@/pages/NotFoundPage.tsx";
import { CoursePage } from "@/pages/CoursePage.tsx";
import { TutorialPage } from "@/pages/TutorialPage.tsx";
import { ArticlePage } from "@/pages/ArticlePage.tsx";
import { HomePage } from "@/pages/HomePage.tsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*<Route path={""} element={<HomePage />} />*/}
        <Route path={""} element={<HomePage />} />
        <Route path={"/article"} element={<ArticlePage />} />
        <Route path={"/tutorial"} element={<TutorialPage />} />
        <Route path={"/course"} element={<CoursePage />} />
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
