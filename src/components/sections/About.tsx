"use client";

import Section from "@/components/Section";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-3xl text-foreground/85 space-y-4">
        <p>
          I am a software engineer focused on crafting smooth, responsive interfaces and performant systems.
        </p>
        <p>
          My toolkit includes Next.js, React, TypeScript, and TailwindCSS. I enjoy building delightful, accessible user experiences with clean code and simple animations.
        </p>
      </div>
    </Section>
  );
}


