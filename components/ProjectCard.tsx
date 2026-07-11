"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocale } from "@/lib/i18n";
import type { Project } from "@/content/projects";

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 761px)").matches
      : false
  );

  useEffect(() => {
    const query = window.matchMedia("(min-width: 761px)");
    const listener = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    query.addEventListener("change", listener);
    return () => query.removeEventListener("change", listener);
  }, []);

  return isDesktop;
}

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const { locale } = useLocale();
  const isDesktop = useIsDesktop();
  const year = project.date.slice(0, 4);
  // "Roleta" diagonal offset only applies on desktop — mobile has no
  // hover to un-rotate it back to 0, so it would stay permanently tilted (7).
  const baseRotate = isDesktop ? (index % 2 === 0 ? -1.5 : 1.5) : 0;

  return (
    <Link
      href={`/projetos/${project.slug}`}
      className="group block border-b border-[#2A241C] py-6"
    >
      <motion.div
        className="flex flex-col gap-1"
        animate={{ rotate: baseRotate }}
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
