"use client";

import Section from "@/components/Section";
import ProjectsWalls from "../ProjectsWalls";
import { projects } from "@/app/projects/projects";

export default function Projects() {
  const mapped = (() => {
    const walls: [any[], any[], any[]] = [[], [], []];
    projects.filter((p:any) => p.display !== false && p.display === true).forEach((p, idx) => {
      const imageSrc = typeof p.image === "string" && p.image.startsWith("/") ? p.image : "/placeholders/placeholder-1.svg";
      walls[idx % 3].push({
        id: p.link || `${p.title}-${idx}`,
        imageSrc,
        title: p.title,
        role: p.role,
        timeline: p.timeline,
        skills: Array.isArray(p.techStack) ? p.techStack : [],
      });
    });
    return { wall1: walls[0], wall2: walls[1], wall3: walls[2] };
  })();
  return (
    <Section id="projects" title="Projects">
      <ProjectsWalls data={mapped} />
    </Section>
  );
}


