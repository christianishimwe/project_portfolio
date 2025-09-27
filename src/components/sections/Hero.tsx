"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative max-w-6xl mx-auto px-6 md:px-8 pt-24 md:pt-36 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="inline-flex items-center rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-foreground/80"
      >
        <span className="mr-2 h-2 w-2 rounded-full bg-accent-cyan glow-cyan" />
        Futuristic Developer Portfolio
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="mt-6 text-4xl md:text-6xl font-bold tracking-tight"
      >
        Christian Ishimwe
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="mt-4 max-w-2xl text-foreground/80"
      >
        Building sleek, high‑performance web experiences with Next.js, React, and a touch of neon.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="mt-8 flex gap-3"
      >
        <a href="#projects" className="rounded-lg bg-accent-blue/90 hover:bg-accent-blue text-background px-5 py-2.5 transition-colors glow-blue">
          View Projects
        </a>
        <a href="#contact" className="rounded-lg border border-white/15 hover:border-white/35 px-5 py-2.5 transition-colors">
          Contact
        </a>
      </motion.div>
    </section>
  );
}


