"use client";

import { careerStatus, getStatusColor, getStatusLabel, type CareerState } from "@/content/status";
import { useLocale } from "@/lib/i18n";

const DOT_CLASS: Record<ReturnType<typeof getStatusColor>, string> = {
  green: "bg-green-500",
  orange: "bg-[#FF6B1A]",
};

export function StatusBadge({
  state = careerStatus.state,
}: {
  state?: CareerState;
}) {
  const { locale } = useLocale();
  const label = getStatusLabel(state, locale);
  const color = getStatusColor(state);

  return (
    <div className="flex items-center gap-2 text-sm text-[#A89E92]">
      <span
        data-testid="status-dot"
        className={`h-2 w-2 rounded-full ${DOT_CLASS[color]}`}
      />
      <span>{label}</span>
    </div>
  );
}
