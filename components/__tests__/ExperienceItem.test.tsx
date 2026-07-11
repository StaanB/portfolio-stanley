import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ExperienceItem } from "@/components/ExperienceItem";
import { LocaleProvider } from "@/lib/i18n";
import type { ExperienceEntry } from "@/content/experience";

const current: ExperienceEntry = {
  company: "Prolog App",
  role: { pt: "Dev Front-end Pleno", en: "Mid-level Front-end Dev" },
  startDate: "2025-12",
};

const past: ExperienceEntry = {
  company: "Oxeanbits",
  role: { pt: "Dev Front-end Junior", en: "Junior Front-end Dev" },
  startDate: "2024-04",
  endDate: "2025-11",
};

describe("ExperienceItem", () => {
  it("renders company, pt role and 'atual' for ongoing entries", () => {
    render(
      <LocaleProvider initialLocale="pt">
        <ExperienceItem entry={current} />
      </LocaleProvider>
    );
    expect(screen.getByText("Prolog App")).toBeInTheDocument();
    expect(screen.getByText("Dev Front-end Pleno")).toBeInTheDocument();
    expect(screen.getByText(/2025-12/)).toBeInTheDocument();
    expect(screen.getByText(/atual/i)).toBeInTheDocument();
  });

  it("renders the end date range for finished entries", () => {
    render(
      <LocaleProvider initialLocale="en">
        <ExperienceItem entry={past} />
      </LocaleProvider>
    );
    expect(screen.getByText("Junior Front-end Dev")).toBeInTheDocument();
    expect(screen.getByText(/2024-04/)).toBeInTheDocument();
    expect(screen.getByText(/2025-11/)).toBeInTheDocument();
  });
});
