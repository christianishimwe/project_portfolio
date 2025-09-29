export default function Hero() {
  return (
    <section id="hero" className="relative max-w-6xl mx-auto px-6 md:px-8 pt-12 md:pt-16 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
        <div className="md:col-span-3">
          <div className="text-xs inline-flex items-center rounded-full border border-white/10 bg-black/30 px-3 py-1 text-foreground/80">
            <span className="mr-2 h-2 w-2 rounded-full bg-accent-cyan glow-cyan" />
            Portfolio
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight">
            Christian Ishimwe
          </h1>
          <p className="mt-3 text-foreground/85 max-w-2xl">
            I’m a software engineer who builds sleek, high‑performance web applications with a focus on clarity, accessibility, and smooth user experiences. I love type‑safe tooling, composable UI, and thoughtful micro‑interactions.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#projects" className="rounded-lg bg-accent-blue/90 hover:bg-accent-blue text-background px-5 py-2.5 transition-colors">View Projects</a>
            <a href="#contact" className="rounded-lg border border-white/15 hover:border-white/35 px-5 py-2.5 transition-colors">Contact</a>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-black/30 shadow-xl">
            <div className="aspect-[4/5] md:aspect-[3/4] bg-gradient-to-br from-accent-purple/20 via-accent-cyan/15 to-accent-blue/20" />
          </div>
        </div>
      </div>

      <div className="mt-6 md:mt-8">
        <div className="max-w-6xl">
          <StatsRowPlaceholder />
        </div>
      </div>
    </section>
  );
}

function StatsRowPlaceholder() {
  const StatsRow = require("@/components/StatsRow").default;
  return <StatsRow />;
}


