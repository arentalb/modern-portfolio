import { Header } from "@/components/Header.tsx";
import { ProjectsHeroSection } from "@/features/projects/sections/ProjectsHeroSection.tsx";
import { BrightLine } from "@/components/common/BrightLine.tsx";
import { ProjectsQuerySection } from "@/features/projects/sections/ProjectsQuerySection.tsx";

export function ProjectsPage() {
  return (
    <>
      <Header />
      <ProjectsHeroSection />
      <BrightLine />
      <ProjectsQuerySection />
    </>
  );
}
