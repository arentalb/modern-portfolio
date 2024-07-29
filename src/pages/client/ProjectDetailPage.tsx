import { Header } from "@/components/Header.tsx";
import { Footer } from "@/components/Footer.tsx";
import { ProjectDetailHeroSection } from "@/features/projects/client/projectDetail/ProjectDetailHeroSection.tsx";
import { useParams } from "react-router";
import { Projects } from "@/data/projects.ts";

export function ProjectDetailPage() {
  const params = useParams();

  if (params.id === undefined) return;

  const project = Projects.filter((proje) => +proje.id === +params.id)[0];

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
