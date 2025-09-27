"use client";

import Section from "@/components/Section";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-3 text-foreground/85">
          <p>
            Interested in collaborating or have a question? Reach out and I’ll get back to you.
          </p>
          <p className="text-sm text-foreground/70">This is a placeholder form.</p>
        </div>
        <form className="rounded-xl border border-white/12 bg-black/30 p-6 space-y-4">
          <input className="w-full rounded-md bg-black/40 border border-white/12 px-3 py-2 placeholder:text-foreground/40" placeholder="Your name" />
          <input className="w-full rounded-md bg-black/40 border border-white/12 px-3 py-2 placeholder:text-foreground/40" placeholder="Email" />
          <textarea className="w-full rounded-md bg-black/40 border border-white/12 px-3 py-2 h-28 placeholder:text-foreground/40" placeholder="Message" />
          <button type="button" className="rounded-md bg-accent-purple/90 hover:bg-accent-purple px-4 py-2 glow-purple text-background">Send</button>
        </form>
      </div>
    </Section>
  );
}


