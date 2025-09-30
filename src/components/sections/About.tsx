"use client";

import Section from "@/components/Section";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-3xl text-foreground/85 space-y-4">
        <p>
          Hey, I am a Junior at the University of Pennsylvania, studying Computer Science, and concentrating in Artificial Intelligence. My primary interests lie in AI/ML and designing fast and scalable algorithms for complex systems.
        </p>
        <p>
          Beyond the classroom, I’ve developed strong backend engineering skills and enjoy building reliable, performant APIs. Last summer, I interned as a Software Engineer at Fulcrum GT, where I worked on AI-driven legal compliance system.
        </p>
        <p>
          I build projects every day to improve my skills and learn new technologies. Checkout my top projects below.
        </p>
      </div>
    </Section>
  );
}


