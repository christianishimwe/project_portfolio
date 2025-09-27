"use client";

import Section from "@/components/Section";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4 text-foreground/85">
          <p>
            I am a software engineer focused on crafting smooth, responsive interfaces and performant systems.
          </p>
          <p>
            My toolkit includes Next.js, React, TypeScript, and TailwindCSS. I enjoy building delightful, accessible user experiences with clean code and simple animations.
          </p>
        </div>
        <div className="rounded-xl border border-white/12 p-6 bg-black/30 glow-purple">
          <div className="h-40 rounded-lg bg-gradient-to-br from-accent-purple/20 via-accent-cyan/20 to-accent-blue/20" />
          <p className="mt-4 text-sm text-foreground/70">Placeholder image / profile box</p>
        </div>
      </div>
    </Section>
  );
}


