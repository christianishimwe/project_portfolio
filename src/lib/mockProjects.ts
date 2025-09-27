import type { ProjectItem } from "@/components/ProjectCard";

const mk = (seed: number, n: number): ProjectItem[] =>
  Array.from({ length: n }, (_, i) => ({
    id: `w${seed}-${i}`,
    // Use local placeholder to ensure visibility even if remote images are blocked
    imageSrc: "/placeholders/placeholder-1.svg",
    title: [
      "Anonymous User — Cisco",
      "Faizan Syed — Developer",
      "Anonymous User — Amazon",
      "Anonymous User — Meta",
      "Anonymous User — Google",
      "Anonymous User — Microsoft",
      "Senior Engineer — Fintech",
      "Startup Founder — SaaS",
      "Anonymous User — Apple",
      "Product Designer — UI",
    ][i % 10],
  }));

export const mockWalls = {
  wall1: mk(1, 12),
  wall2: mk(21, 12),
  wall3: mk(41, 12),
};


