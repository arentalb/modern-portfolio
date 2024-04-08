import { Header } from "@/components/Header.tsx";
import { Footer } from "@/components/Footer.tsx";
import { ProjectDetailHeroSection } from "@/features/projects/project detail sections/ProjectDetailHeroSection.tsx";
import { ProjectDetailDescriptionSection } from "@/features/projects/project detail sections/ProjectDetailDescriptionSection.tsx";
import { ProjectsDetailsSection } from "@/features/projects/project detail sections/ProjectsDetailsSection.tsx";
import { BrightLine } from "@/components/common/BrightLine.tsx";
import { useParams } from "react-router";
import { useGetProjectByID } from "@/features/admin/Projects/useGetProjectByID.ts";

export function ProjectDetailPage() {
  const params = useParams();
  const { project, isLoading } = useGetProjectByID(Number(params.id));

  return (
    <>
      {isLoading ? <p>loading</p> : ""}
      {project ? (
        <>
          <Header />
          <ProjectDetailHeroSection project={project} />
          <BrightLine />
          <ProjectDetailDescriptionSection project={project} />
          <ProjectsDetailsSection project={project} />
          <Footer />
        </>
      ) : (
        ""
      )}
    </>
  );
}
