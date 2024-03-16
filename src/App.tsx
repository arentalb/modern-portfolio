import { Route, Routes } from "react-router";
import { NotFoundPage } from "@/pages/NotFoundPage.tsx";
import { ArticlePage } from "@/pages/ArticlePage.tsx";
import { HomePage } from "@/pages/HomePage.tsx";
import { BrowserRouter } from "react-router-dom";
import { CertificatePage } from "@/pages/CertificatePage.tsx";
import { TerminalProvider } from "@/context/TerminalContext.tsx";

function App() {
  return (
    <BrowserRouter>
      <TerminalProvider>
        <Routes>
          {/*<Route path={""} element={<HomePage />} />*/}
          <Route path={""} element={<HomePage />} />
          <Route path={"/article"} element={<ArticlePage />} />
          {/*<Route path={"/tutorial"} element={<TutorialPage />} />*/}
          {/*<Route path={"/course"} element={<CoursePage />} />*/}
          <Route path={"/certificates"} element={<CertificatePage />} />
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </TerminalProvider>
    </BrowserRouter>
  );
}

export default App;
