"use client";

export default function AnimatedGradient() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_60%)]"
    >
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg,theme(colors.accent-blue/.06),theme(colors.accent-purple/.06),theme(colors.accent-cyan/.06),theme(colors.accent-blue/.06))] animate-spin-slow" />
      <style jsx global>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 40s linear infinite; }
      `}</style>
    </div>
  );
}


