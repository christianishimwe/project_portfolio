"use client";

import Section from "@/components/Section";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Nebula UI",
    description: "A minimal, neon‑accented component kit for dashboards.",
  },
  {
    title: "Quantum Blog",
    description: "Static blog with MDX, search, and smooth reading experience.",
  },
  {
    title: "Aurora Analytics",
    description: "Lightweight metrics viewer with charts and real‑time updates.",
  },
];

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group rounded-xl border border-white/12 bg-black/30 p-5 hover:border-accent-cyan/50 transition-colors"
          >
            <div className="h-32 rounded-lg bg-gradient-to-br from-accent-blue/15 via-accent-cyan/15 to-accent-purple/15 group-hover:glow-cyan transition-shadow" />
            <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
            <p className="mt-1 text-sm text-foreground/75">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}


