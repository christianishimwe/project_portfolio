"use client";

import Image from "next/image";

export type ProjectItem = {
  id: string | number;
  imageSrc: string;
  title?: string;
  role?: string;
  timeline?: string;
  skills?: string[];
};

export default function ProjectCard({ item, index = 0, skills = ["Next.js", "React", "Tailwind", "PostgreSQL"], href = "#", onPause, onResume, }: { item: ProjectItem; index?: number; skills?: string[]; href?: string; onPause?: () => void; onResume?: () => void; }) {
  const aspectVariants = ["aspect-[4/3]", "aspect-[1/1]", "aspect-[3/4]"] as const;
  const aspect = aspectVariants[index % aspectVariants.length];
  return (
    <div className="group/card rounded-2xl overflow-hidden shadow-xl bg-black/40 backdrop-blur-sm ring-1 ring-white/10 hover:ring-cyan-500/30 transition">
      <div className={`relative ${aspect}`}
        onMouseEnter={() => onPause?.()}
        onMouseLeave={() => onResume?.()}
        onFocus={() => onPause?.()}
        onBlur={() => onResume?.()}
        tabIndex={0}
        role="button"
        aria-label={item.title ? `View ${item.title}` : "View project"}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 via-accent-cyan/15 to-accent-purple/20" />
        <Image
          src={item.imageSrc}
          alt={item.title ? item.title : "Project thumbnail"}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          aria-hidden={item.title ? undefined : true}
        />
        {/* Overlay */}
        <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-all duration-300 ease-in-out bg-black/70 backdrop-blur-sm flex items-center justify-center">
          <div className="flex flex-col items-center gap-3 px-4 text-center">
            <a href={href} className="rounded-full px-5 py-2 text-sm font-semibold text-cyan-300 ring-1 ring-cyan-400/60 hover:ring-cyan-300 glow-cyan transition shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              View Project
            </a>
            <div className="flex flex-wrap gap-2 justify-center">
              {skills.map((s, i) => (
                <span
                  key={s + i}
                  className="rounded-full px-3 py-1 text-xs text-foreground/90 ring-1 ring-cyan-400/40 hover:ring-2 hover:ring-cyan-300 transition"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
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


