"use client";

import Image from "next/image";

export type ProjectItem = {
  id: string | number;
  imageSrc: string;
  title?: string;
};

export default function ProjectCard({ item, index = 0 }: { item: ProjectItem; index?: number }) {
  const aspectVariants = ["aspect-[4/3]", "aspect-[1/1]", "aspect-[3/4]"] as const;
  const aspect = aspectVariants[index % aspectVariants.length];
  const initial = (item.title?.charAt(0) || "P").toUpperCase();
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
      <div className="px-3 py-2 text-xs text-foreground/85 flex items-center gap-2">
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent-purple/25 text-[10px]">{initial}</span>
        <span className="truncate">{item.title ?? "Project"}</span>
        <span aria-hidden className="ml-auto text-[10px] text-foreground/60">★★★★★</span>
      </div>
    </div>
  );
}


