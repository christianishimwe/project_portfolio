"use client";

import Section from "@/components/Section";
import { useEffect, useRef } from "react";

const skills = [
  { label: "Next.js", radius: 90 },
  { label: "React", radius: 70 },
  { label: "TypeScript", radius: 110 },
  { label: "TailwindCSS", radius: 85 },
  { label: "Node.js", radius: 100 },
  { label: "Framer Motion", radius: 95 },
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let angle = 0;
    let raf = 0;

    const tick = () => {
      angle += 0.0035;
      const items = Array.from(container.querySelectorAll<HTMLElement>("[data-skill]"));
      items.forEach((el, i) => {
        const r = Number(el.dataset.radius || 90);
        const a = angle + (i * Math.PI * 2) / items.length;
        const x = Math.cos(a) * r;
        const y = Math.sin(a) * r * 0.5; // slight ellipse
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <Section id="skills" title="Skills">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative h-72 md:h-80 rounded-xl border border-white/12 bg-black/30 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-24 w-24 rounded-full bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 glow-purple" />
          </div>
          <div ref={containerRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {skills.map((s) => (
              <div
                key={s.label}
                data-skill
                data-radius={s.radius}
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded-md border border-white/12 bg-black/40 px-3 py-1 text-xs md:text-sm text-foreground/90 hover:border-accent-cyan/60 hover:glow-cyan transition"
              >
                {s.label}
              </div>
            ))}
          </div>
        </div>
        <div className="text-foreground/80">
          <p>
            A quick glance at my core stack. Tags orbit and gently rotate to evoke a sleek data‑viz feel, without overwhelming motion.
          </p>
        </div>
      </div>
    </Section>
  );
}


