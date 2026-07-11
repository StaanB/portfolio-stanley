"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import type { Project } from "@/content/projects";

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const { locale } = useLocale();
  const year = project.date.slice(0, 4);
  const baseRotate = index % 2 === 0 ? -1.5 : 1.5;

  return (
    <Link
      href={`/projetos/${project.slug}`}
      className="group block border-b border-[#2A241C] py-6"
    >
      <motion.div
        className="flex flex-col gap-1"
        initial={{ rotate: baseRotate }}
        whileHover={{ rotate: 0, x: 12 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-sm text-[#A89E92]">{year}</span>
          <span className="font-display text-4xl uppercase text-[#FF6B1A] transition-all duration-300 [-webkit-text-stroke:0] group-hover:bg-transparent group-hover:text-transparent group-hover:[-webkit-text-stroke:2px_#FF6B1A] sm:text-6xl">
            {project.title}
          </span>
        </div>
        <span className="text-sm text-[#A89E92] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {project.tagline[locale]}
        </span>
      </motion.div>
    </Link>
  );
}
