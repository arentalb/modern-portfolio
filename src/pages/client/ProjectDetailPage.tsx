import { Header } from "@/components/Header.tsx";
import { Footer } from "@/components/Footer.tsx";
import { ProjectDetailHeroSection } from "@/features/projects/client/projectDetail/ProjectDetailHeroSection.tsx";
import { useParams } from "react-router";
import { Projects } from "@/data/projects.ts";

export function ProjectDetailPage() {
  const params = useParams<{ id: string }>();

  if (!params.id) {
    return <div>Project ID is missing</div>;
  }

  const projectId = parseInt(params.id, 10);
  const project = Projects.find((proje) => proje.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <Header />
      <ProjectDetailHeroSection project={project} />
      {/*<ProjectDetailDescriptionSection project={project} />*/}
      {/*<ProjectsDetailsSection project={project} />*/}
      <Footer />
    </>
  );
}
