"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/content/projects";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function HomeList({ projects }: { projects: Project[] }) {
  return (
    <>
      <h1 className="sr-only">Stanley Brenner — Projetos</h1>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col"
      >
        {projects.map((project, index) => (
          <motion.div key={project.slug} variants={item}>
            <ProjectCard project={project} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
