import { Header } from "@/components/Header.tsx";
import { ProjectsHeroSection } from "@/features/projects/client/projectList/ProjectsHeroSection.tsx";
import { BrightLine } from "@/components/common/BrightLine.tsx";
import { ProjectsListSection } from "@/features/projects/client/projectList/ProjectsListSection.tsx";
import { Footer } from "@/components/Footer.tsx";

export function ProjectsPage() {
  return (
    <>
      <Header />
      <ProjectsHeroSection />
      <BrightLine />
      <ProjectsListSection />
      <Footer />
    </>
  );
}
