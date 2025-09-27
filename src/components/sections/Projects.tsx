"use client";

import Section from "@/components/Section";
import ProjectsWalls from "../ProjectsWalls";
import { mockWalls } from "../../lib/mockProjects";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ProjectsWalls data={mockWalls} />
    </Section>
  );
}


