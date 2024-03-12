import { Header } from "@/components/layout/Header.tsx";
import { HeroSection } from "@/components/layout/home/HeroSection.tsx";
import { SkillsSection } from "@/components/layout/home/SkillsSection.tsx";

export function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <div className={"border-t-2 border-t-white-primary"}></div>
      <SkillsSection />
      <div className={"border-t-2 border-t-white-primary"}></div>
    </>
  );
}
