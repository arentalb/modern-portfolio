import { Header } from "@/components/layout/Header.tsx";
import { HeroSection } from "@/components/layout/home/HeroSection.tsx";
import { SkillsSection } from "@/components/layout/home/SkillsSection.tsx";
import { BrightLine } from "@/components/common/BrightLine.tsx";
import { BrightCurvedLine } from "@/components/common/BrightCurvedLine.tsx";
import { ProjectSection } from "@/components/layout/home/ProjectSection.tsx";
import { ExperienceSection } from "@/components/layout/home/ExperienceSection.tsx";
import { CertificateSection } from "@/components/layout/home/CertificateSection.tsx";
import { StatisticsSection } from "@/components/layout/home/StatisticsSection.tsx";
import { CallToAction } from "@/components/layout/home/CallToAction.tsx";
import { Footer } from "@/components/layout/Footer.tsx";

export function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <BrightLine />
      <SkillsSection />
      <BrightCurvedLine direction={"up"} />
      <ProjectSection />
      <ExperienceSection />
      <BrightCurvedLine direction={"down"} />
      <CertificateSection />
      <StatisticsSection />
      <CallToAction />
      <Footer />
    </>
  );
}
