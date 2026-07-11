import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { ProjectDetail } from "@/components/ProjectDetail";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const nextProject = projects[(index + 1) % projects.length];

  return <ProjectDetail project={project} nextProject={nextProject} />;
}
