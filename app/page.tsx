import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export default function Home() {
  return (
    <div className="flex flex-col">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
