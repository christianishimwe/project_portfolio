"use client";

import Section from "@/components/Section";
import SkillBadge from "@/components/SkillBadge";

const pillars = [
  {
    title: "AI / ML",
    skills: ["Python", "PyTorch", "Hugging Face", "Scikit-learn", "Jupyter", "Weaviate"],
  },
  {
    title: "Software Development",
    skills: ["TypeScript", "Node.js", "PostgreSQL", "REST APIs", "Git", "Docker"],
  },
  {
    title: "Frameworks & Tools",
    skills: ["React", "Next.js", "TailwindCSS", "Framer Motion", "Prisma", "Lucide"],
  },
];

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {pillars.map((p, pi) => (
          <div
            key={p.title}
            className="rounded-2xl bg-slate-900/60 backdrop-blur p-6 ring-1 ring-white/10"
          >
            <h3 className="text-lg font-semibold tracking-tight mb-4">{p.title}</h3>
            <div className="flex flex-wrap gap-2">
              {p.skills.map((s, si) => (
                <SkillBadge key={s} label={s} delay={(pi * 0.6) + (si * 0.08)} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}


