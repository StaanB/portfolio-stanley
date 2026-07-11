"use client";

import { useLocale } from "@/lib/i18n";
import type { ExperienceEntry } from "@/content/experience";

const CURRENT_LABEL = { pt: "atual", en: "present" };

export function ExperienceItem({ entry }: { entry: ExperienceEntry }) {
  const { locale } = useLocale();
  const endLabel = entry.endDate ?? CURRENT_LABEL[locale];

  return (
    <div className="flex flex-col gap-1 border-b border-[#2A241C] py-4">
      <div className="flex items-baseline justify-between gap-4">
        <span className="font-display text-xl uppercase text-[#F2ECE3]">
          {entry.company}
        </span>
        <span className="font-mono text-xs text-[#A89E92]">
          {entry.startDate} — {endLabel}
        </span>
      </div>
      <span className="text-sm text-[#FF6B1A]">{entry.role[locale]}</span>
    </div>
  );
}
