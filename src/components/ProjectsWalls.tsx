"use client";

import VerticalWall from "./VerticalWall";
import ProjectCard, { ProjectItem } from "./ProjectCard";

export type WallConfig = {
  direction?: "up" | "down";
  speed?: number; // px/sec
};

export type ProjectsWallsProps = {
  walls?: WallConfig[];
  data?: {
    wall1: ProjectItem[];
    wall2: ProjectItem[];
    wall3: ProjectItem[];
  };
  className?: string;
};

const defaultWalls: WallConfig[] = [
  { direction: "up", speed: 60 },
  { direction: "down", speed: 45 },
  { direction: "up", speed: 75 },
];

const fallbackItem = (n: number): ProjectItem => ({
  id: `p-${n}`,
  imageSrc: `https://picsum.photos/seed/${n}/600/450`,
  title: `Project ${n}`,
});

const defaultData = {
  wall1: Array.from({ length: 9 }, (_, i) => fallbackItem(i + 1)),
  wall2: Array.from({ length: 9 }, (_, i) => fallbackItem(i + 21)),
  wall3: Array.from({ length: 9 }, (_, i) => fallbackItem(i + 41)),
};

export default function ProjectsWalls({
  walls = defaultWalls,
  data = defaultData,
  className,
}: ProjectsWallsProps) {
  const { wall1, wall2, wall3 } = data;
  const cols = [wall1, wall2, wall3];

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${className ?? ""}`}>
      {cols.map((items, idx) => {
        const cfg = walls[idx] ?? defaultWalls[idx] ?? defaultWalls[0];
        return (
          <div
            key={`wall-${idx}`}
            className="relative overflow-hidden edge-fade rounded-3xl bg-gradient-to-b from-slate-950/70 to-slate-900/70 ring-1 ring-white/10 min-h-[520px] md:min-h-[640px]"
          >
            <VerticalWall
              items={items}
              direction={cfg.direction}
              speed={cfg.speed}
              className="p-4 h-[520px] md:h-[640px]"
              renderItem={(item, i) => <ProjectCard item={item} index={i} />}
            />
          </div>
        );
      })}
    </div>
  );
}


