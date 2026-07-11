"use client";

import { useLocale } from "@/lib/i18n";
import { experience } from "@/content/experience";
import { skillGroups } from "@/content/skills";
import { ExperienceItem } from "@/components/ExperienceItem";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TagList } from "@/components/TagList";

export function SobrePage() {
  const { t } = useLocale();

  const highlights = [
    t("highlightMigration"),
    t("highlightZeroBugs1"),
    t("highlightZeroBugs2"),
  ];

  return (
    <div className="flex flex-col gap-16">
      <header className="flex flex-col gap-4">
        <h1 className="font-display text-2xl uppercase text-[#FF6B1A] sm:text-3xl">
          {t("aboutTitle")}
        </h1>
        <p className="max-w-2xl text-lg font-medium leading-snug text-[#F2ECE3]">
          {t("aboutHeadline")}
        </p>
        <p className="max-w-2xl text-base leading-relaxed text-[#A89E92]">
          {t("aboutBio")}
        </p>
      </header>

      <ScrollReveal>
        <section className="flex flex-col gap-3">
          <h2 className="font-display text-xl uppercase text-[#A89E92]">
            {t("highlightsHeading")}
          </h2>
          <ul className="flex flex-col gap-2">
            {highlights.map((highlight) => (
              <li
                key={highlight}
                className="border-l-2 border-[#FF6B1A] pl-4 text-sm text-[#F2ECE3]"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="flex flex-col gap-3">
          <h2 className="font-display text-xl uppercase text-[#A89E92]">
            {t("experienceHeading")}
          </h2>
          <div className="flex flex-col">
            {experience.map((entry) => (
              <ExperienceItem key={entry.company} entry={entry} />
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="flex flex-col gap-6">
          <h2 className="font-display text-xl uppercase text-[#A89E92]">
            {t("skillsHeading")}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.labelKey} className="flex flex-col gap-2">
                <h3 className="text-sm uppercase text-[#FF6B1A]">
                  {t(group.labelKey)}
                </h3>
                <TagList items={group.items} />
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
