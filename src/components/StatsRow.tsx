import StatsCard from "./StatsCard";
import { GraduationCap, Briefcase, Rocket, Github } from "lucide-react";

export type StatItem = {
  icon: React.ReactNode;
  label: string;
  value: string | number;
};

export default function StatsRow({ items }: { items?: StatItem[] }) {
  const data: StatItem[] =
    items ?? [
      { icon: <GraduationCap className="w-7 h-7" />, label: "Certifications", value: "4" },
      { icon: <Briefcase className="w-7 h-7" />, label: "Years Experience", value: "1" },
      { icon: <Rocket className="w-7 h-7" />, label: "Projects", value: "4" },
      { icon: <Github className="w-7 h-7" />, label: "GitHub Commits", value: "400+" },
    ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
      {data.map((s) => (
        <StatsCard key={s.label} icon={s.icon} label={s.label} value={s.value} />
      ))}
    </div>
  );
}


