"use client";

import { useState, useMemo } from "react";
import GalleryCard from "@/components/GalleryCard";
import { projects } from "./projects";
import { motion, AnimatePresence } from "framer-motion";

const filters = ["All", "AI/ML", "Software Development"] as const;

export default function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  // Map external projects.ts to the shape expected by GalleryCard
  const mapped = useMemo(() => {
    return projects.filter((p:any) => p.display !== false && p.display === true).map((p) => ({
      title: p.title,
      description: p.description,
      tags: Array.isArray(p.techStack) ? p.techStack : [],
      category: Array.isArray(p.category)
        ? (p.category.includes("AI/ML") ? "AI/ML" : "Software Development")
        : (p.category === "AI/ML" ? "AI/ML" : "Software Development"),
      date: p.timeline,
      image: p.image,
      link: p.link,
    }));
  }, []);

  const filtered = useMemo(() => {
    if (filter === "All") return mapped;
    return mapped.filter((p) => p.category === filter);
  }, [filter, mapped]);

  return (
    <section className="min-h-[calc(100vh-64px)] py-10 md:py-12 px-6 md:px-8">
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Projects</h1>
        <div className="flex flex-wrap gap-2 mb-6">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-1.5 text-sm ring-1 transition ${
                filter === f
                  ? "ring-cyan-400/40 bg-white/5 text-foreground"
                  : "ring-white/10 text-foreground/80 hover:ring-cyan-400/30"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((p) => (
              <motion.div key={p.title} layout initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
                <GalleryCard project={p} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}


