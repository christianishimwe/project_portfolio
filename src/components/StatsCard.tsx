import { ReactNode } from "react";

type StatsCardProps = {
  icon: ReactNode;
  label: string;
  value: string | number;
};

export default function StatsCard({ icon, label, value }: StatsCardProps) {
  return (
    <div className="rounded-xl ring-1 ring-white/10 bg-black/30 px-4 py-4 shadow-sm transition transform hover:scale-[1.01] hover:ring-cyan-400/30">
      <div className="flex flex-col items-start gap-2">
        <div className="text-cyan-400 drop-shadow-md" aria-hidden>{icon}</div>
        <div className="text-slate-300 text-sm">{label}</div>
        <div className="text-foreground text-2xl font-semibold tracking-tight">{value}</div>
      </div>
    </div>
  );
}


