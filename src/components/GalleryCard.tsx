"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { GalleryProject } from "@/lib/projectsGallery";

export default function GalleryCard({ project }: { project: GalleryProject }) {
  return (
    <motion.article
      initial={false}
      whileHover={{ y: -3 }}
      className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-black/30 backdrop-blur shadow-sm hover:ring-cyan-400/30 transition"
    >
      <div className="relative aspect-[4/3]">
        <Image src={project.image} alt={project.title} fill className="object-cover" />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-base md:text-lg font-semibold tracking-tight truncate">{project.title}</h3>
        <p className="text-sm text-foreground/80 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((t) => (
            <span key={t} className="rounded-full bg-white/5 px-3 py-0.5 text-xs ring-1 ring-cyan-500/10 text-foreground/85 hover:ring-cyan-400/30 transition">
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-foreground/60">{project.date}</span>
          <a href={project.link} target="_blank" rel="noreferrer" className="rounded-md px-3 py-1.5 text-xs font-medium ring-1 ring-cyan-500/20 hover:ring-cyan-400/40 text-cyan-300">
            View Project
          </a>
        </div>
      </div>
    </motion.article>
  );
}


