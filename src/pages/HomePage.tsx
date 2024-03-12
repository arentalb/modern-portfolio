import { Header } from "@/components/layout/Header.tsx";
import { HeroSection } from "@/components/layout/home/HeroSection.tsx";
import { SkillsSection } from "@/components/layout/home/SkillsSection.tsx";
import { BrightLine } from "@/components/common/BrightLine.tsx";

export function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <BrightLine />
      <SkillsSection />
      <BrightLine />
    </>
  );
}
