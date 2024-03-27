import { Route, Routes } from "react-router";
import { NotFoundPage } from "@/pages/NotFoundPage.tsx";
import { ArticlePage } from "@/pages/ArticlePage.tsx";
import { HomePage } from "@/pages/HomePage.tsx";
import { BrowserRouter } from "react-router-dom";
import { CertificatePage } from "@/pages/CertificatePage.tsx";
import { TerminalProvider } from "@/context/TerminalContext.tsx";
import { ProjectsPage } from "@/pages/ProjectsPage.tsx";
import { ExperiencePage } from "@/pages/ExperiencePage.tsx";
import { ProjectDetailPage } from "@/pages/ProjectDetailPage.tsx";
import { LoginPage } from "@/pages/LoginPage.tsx";

function App() {
  return (
    <BrowserRouter>
      <TerminalProvider>
        <Routes>
          {/*<Route path={""} element={<HomePage />} />*/}
          <Route path={""} element={<HomePage />} />
          <Route path={"/projects"} element={<ProjectsPage />} />
          <Route path={"/project/:id"} element={<ProjectDetailPage />} />
          <Route path={"/experience"} element={<ExperiencePage />} />
          <Route path={"/article"} element={<ArticlePage />} />
          {/*<Route path={"/tutorial"} element={<TutorialPage />} />*/}
          {/*<Route path={"/course"} element={<CoursePage />} />*/}
          <Route path={"/certificates"} element={<CertificatePage />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </TerminalProvider>
    </BrowserRouter>
  );
}

export default App;
