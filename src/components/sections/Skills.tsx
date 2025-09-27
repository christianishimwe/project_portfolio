"use client";

import Section from "@/components/Section";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "TailwindCSS",
  "Node.js",
  "Framer Motion",
];

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <ul className="flex flex-wrap gap-3">
        {skills.map((s) => (
          <li
            key={s}
            className="rounded-lg border border-white/12 bg-black/30 px-3 py-1.5 text-sm hover:border-accent-blue/60 hover:glow-blue transition"
          >
            {s}
          </li>
        ))}
      </ul>
    </Section>
  );
}


