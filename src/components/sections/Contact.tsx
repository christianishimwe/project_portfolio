"use client";

import Section from "@/components/Section";
import { motion } from "framer-motion";

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
          <input className="w-full rounded-md bg-black/40 border border-white/12 px-3 py-2 placeholder:text-foreground/40 focus:outline-none focus:border-accent-cyan/60 focus:glow-cyan transition" placeholder="Your name" />
          <input className="w-full rounded-md bg-black/40 border border-white/12 px-3 py-2 placeholder:text-foreground/40 focus:outline-none focus:border-accent-cyan/60 focus:glow-cyan transition" placeholder="Email" />
          <textarea className="w-full rounded-md bg-black/40 border border-white/12 px-3 py-2 h-28 placeholder:text-foreground/40 focus:outline-none focus:border-accent-cyan/60 focus:glow-cyan transition" placeholder="Message" />
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-md bg-accent-purple/90 hover:bg-accent-purple px-4 py-2 glow-purple text-background"
          >
            <span className="relative inline-flex items-center">
              <span>Send</span>
              <span className="ml-2 inline-block h-2 w-2 rounded-full bg-accent-cyan animate-ping" />
            </span>
          </motion.button>
        </form>
      </div>
    </Section>
  );
}


