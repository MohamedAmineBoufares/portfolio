"use client";

import React from "react";
import SectionHeading from "../../ui/section-heading";
import { projectsData } from "@/lib/data";
import Project from ".";
import useSyncView from "@/hooks/useSyncView";

export default function Projects() {
  const { ref } = useSyncView({ hash: "#projects" });

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Project key={`project-${index + 1}`} {...project} />
        ))}
      </div>
    </section>
  );
}
