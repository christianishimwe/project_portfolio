import ProjectsWalls from "@/components/ProjectsWalls";
import { mockWalls } from "@/lib/mockProjects";

export default function ProjectsPage() {
  return (
    <section className="min-h-[calc(100vh-64px)] py-12 md:py-16 px-6 md:px-8 flex items-center">
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Projects</h1>
        <ProjectsWalls data={mockWalls} />
      </div>
    </section>
  );
}


