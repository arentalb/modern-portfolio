import { Header } from "@/components/Header.tsx";
import { Footer } from "@/components/Footer.tsx";
import { ProjectDetailHeroSection } from "@/features/projects/project detail sections/ProjectDetailHeroSection.tsx";

export function ProjectDetailPage() {
  return (
    <>
      <Header />
      <ProjectDetailHeroSection />
      <Footer />
    </>
  );
}
