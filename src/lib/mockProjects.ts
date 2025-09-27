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
    role: [
      "Frontend Lead",
      "Full‑Stack Engineer",
      "UI Engineering",
      "Platform Engineer",
      "Design Systems",
      "Data Visualization",
      "Performance & DX",
      "Animations & UX",
      "Infra & Tooling",
      "Product Experience",
    ][(i + 2) % 10],
    timeline: [
      "2024 • 6 months",
      "2023‑2024 • 3 months",
      "2024 • 8 weeks",
      "2023 • 4 months",
      "2022‑2023 • 5 months",
      "2024 • 10 weeks",
      "2023 • 12 weeks",
      "2022 • 14 weeks",
      "2021‑2022 • 5 months",
      "2024 • 7 weeks",
    ][(i + 4) % 10],
  }));

export const mockWalls = {
  wall1: mk(1, 12),
  wall2: mk(21, 12),
  wall3: mk(41, 12),
};


