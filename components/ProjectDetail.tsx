"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/lib/i18n";
import { TagList } from "@/components/TagList";
import type { Project } from "@/content/projects";

const SCREENSHOTS: Record<string, { src: string; width: number; height: number }> = {
  animatch: { src: "/images/animatch-home.png", width: 1859, height: 867 },
  dpms: { src: "/images/dpms-home.png", width: 927, height: 584 },
};

export function ProjectDetail({
  project,
  nextProject,
}: {
  project: Project;
  nextProject: Project;
}) {
  const { locale, t } = useLocale();
  const year = project.date.slice(0, 4);
  const screenshot = project.hasScreenshot
    ? SCREENSHOTS[project.slug]
    : undefined;

  return (
    <article className="flex flex-col gap-10">
      <header className="flex flex-col gap-3">
        <span className="font-mono text-sm text-[#A89E92]">{year}</span>
        <h1 className="font-display text-5xl uppercase text-[#FF6B1A] sm:text-7xl">
          {project.title}
        </h1>
        <p className="max-w-2xl text-lg text-[#F2ECE3]">
          {project.tagline[locale]}
        </p>
      </header>

      {screenshot && (
        <Image
          src={screenshot.src}
          alt={project.title}
          width={screenshot.width}
          height={screenshot.height}
          className="w-full max-w-3xl rounded border border-[#2A241C]"
        />
      )}

      <div className="grid max-w-3xl gap-8 sm:grid-cols-[2fr_1fr]">
        <div className="flex flex-col gap-6">
          <p className="text-base leading-relaxed text-[#F2ECE3]">
            {project.summary[locale]}
          </p>
          <ul className="flex flex-col gap-2">
            {project.highlights.map((highlight, i) => (
              <li
                key={i}
                className="border-l-2 border-[#FF6B1A] pl-4 text-sm text-[#A89E92]"
              >
                {highlight[locale]}
              </li>
            ))}
          </ul>
        </div>

        <dl className="flex flex-col gap-4 text-sm">
          <div>
            <dt className="text-[#A89E92]">{t("roleLabel")}</dt>
            <dd className="text-[#F2ECE3]">{project.role[locale]}</dd>
          </div>
          <div>
            <dt className="text-[#A89E92]">{t("stackLabel")}</dt>
            <dd className="pt-1">
              <TagList items={project.stack} />
            </dd>
          </div>
          {project.links && project.links.length > 0 && (
            <div>
              <dt className="text-[#A89E92]">{t("linksLabel")}</dt>
              <dd className="flex flex-col gap-1 pt-1">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FF6B1A] transition-colors hover:text-[#F2ECE3]"
                  >
                    {link.label}
                  </a>
                ))}
              </dd>
            </div>
          )}
        </dl>
      </div>

      <Link
        href={`/projetos/${nextProject.slug}`}
        className="group mt-8 flex items-center justify-between border-t border-[#2A241C] pt-8"
      >
        <span className="text-sm uppercase text-[#A89E92]">
          {t("nextProject")}
        </span>
        <span className="font-display text-3xl uppercase text-[#F2ECE3] transition-colors group-hover:text-[#FF6B1A] sm:text-5xl">
          {nextProject.title}
        </span>
      </Link>
    </article>
  );
}
