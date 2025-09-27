"use client";

import Image from "next/image";

export type ProjectItem = {
  id: string | number;
  imageSrc: string;
  title?: string;
  role?: string;
  timeline?: string;
};

export default function ProjectCard({ item, index = 0 }: { item: ProjectItem; index?: number }) {
  const aspectVariants = ["aspect-[4/3]", "aspect-[1/1]", "aspect-[3/4]"] as const;
  const aspect = aspectVariants[index % aspectVariants.length];
  return (
    <div className="rounded-2xl overflow-hidden shadow-xl bg-black/40 backdrop-blur-sm ring-1 ring-white/10 hover:ring-cyan-500/30 transition">
      <div className={`relative ${aspect}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 via-accent-cyan/15 to-accent-purple/20" />
        <Image
          src={item.imageSrc}
          alt={item.title ? item.title : "Project thumbnail"}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          aria-hidden={item.title ? undefined : true}
        />
      </div>
      <div className="px-3 pb-3 pt-2">
        <div className="relative rounded-xl backdrop-blur-md bg-slate-900/40 ring-1 ring-cyan-500/10 p-3">
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-400/40 via-cyan-300/25 to-purple-500/40" />
          <div className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent text-base md:text-lg font-semibold tracking-tight truncate">
            {item.title ?? "Untitled Project"}
          </div>
          {item.role ? (
            <div className="text-slate-400 text-sm truncate mt-1">{item.role}</div>
          ) : null}
          {item.timeline ? (
            <div className="text-slate-500 text-xs mt-1">{item.timeline}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}


