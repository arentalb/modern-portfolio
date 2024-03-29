import { Navigate, Route, Routes } from "react-router";
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
import { AdminPage } from "@/pages/admin/AdminPage.tsx";
import { TechnologiesAdminPage } from "@/pages/admin/TechnologiesAdminPage.tsx";
import { SettingAdminPage } from "@/pages/admin/SettingAdminPage.tsx";

import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
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
            <Route
              path="/admin"
              element={<Navigate to="/admin/technologies" />}
            />
            <Route path="/admin" element={<AdminPage />}>
              <Route path="technologies" element={<TechnologiesAdminPage />} />
              <Route path="settings" element={<SettingAdminPage />} />
            </Route>
            <Route path={"*"} element={<NotFoundPage />} />
          </Routes>
        </TerminalProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
