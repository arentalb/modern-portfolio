import { Header } from "@/components/Header.tsx";
import { Footer } from "@/components/Footer.tsx";
import { ProjectDetailHeroSection } from "@/features/projects/client/projectDetail/ProjectDetailHeroSection.tsx";
import { ProjectDetailDescriptionSection } from "@/features/projects/client/projectDetail/ProjectDetailDescriptionSection.tsx";
import { ProjectsDetailsSection } from "@/features/projects/client/projectDetail/ProjectsDetailsSection.tsx";
import { BrightLine } from "@/components/common/BrightLine.tsx";
import { useParams } from "react-router";
import { useGetProjectByID } from "@/features/projects/useGetProjectByID.ts";

export function ProjectDetailPage() {
  const params = useParams();
  const { project, isLoading } = useGetProjectByID(Number(params.id));

  return (
    <>
      <Header />
      <ProjectDetailHeroSection project={project} isLoading={isLoading} />
      <BrightLine />
      <ProjectDetailDescriptionSection
        project={project}
        isLoading={isLoading}
      />
      <ProjectsDetailsSection project={project} isLoading={isLoading} />
      <Footer />
    </>
  );
}
