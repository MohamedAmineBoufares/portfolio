import Skills from "@/sections/skills";
import About from "@/sections/about";
import Intro from "@/sections/intro";
import Projects from "@/sections/project/projects";
import SectionDivider from "@/ui/section-divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />

      <SectionDivider />

      <About />

      <Projects />

      <Skills />
    </main>
  );
}
