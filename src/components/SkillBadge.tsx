"use client";

import { motion, useReducedMotion, type TargetAndTransition } from "framer-motion";

export default function SkillBadge({ label, delay = 0 }: { label: string; delay?: number }) {
  const reduce = useReducedMotion();
  const floatAnim: TargetAndTransition | undefined = reduce
    ? undefined
    : {
        y: [0, -3, 0],
        transition: { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
      };

  return (
    <motion.button
      type="button"
      className="rounded-full px-4 py-1 text-sm font-medium bg-slate-900/60 backdrop-blur ring-1 ring-cyan-500/10 text-foreground/90 transition-all duration-200 ease-out hover:scale-105 hover:shadow-[0_0_18px_rgba(34,211,238,0.25)] active:scale-95"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={false}
      animate={floatAnim}
    >
      <span className="relative">
        {label}
      </span>
    </motion.button>
  );
}


