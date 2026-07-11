import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProjectCard } from "@/components/ProjectCard";
import { LocaleProvider } from "@/lib/i18n";
import type { Project } from "@/content/projects";

const project: Project = {
  slug: "animatch",
  title: "AniMatch",
  date: "2026-04-13",
  type: "personal",
  tagline: { pt: "Tagline PT", en: "Tagline EN" },
  summary: { pt: "Summary PT", en: "Summary EN" },
  role: { pt: "Role PT", en: "Role EN" },
  stack: ["Next.js"],
  highlights: [{ pt: "H", en: "H" }],
  hasScreenshot: true,
};

describe("ProjectCard", () => {
  it("renders the title, pt tagline and year, linking to the project page", () => {
    render(
      <LocaleProvider initialLocale="pt">
        <ProjectCard project={project} />
      </LocaleProvider>
    );
    expect(screen.getByText("AniMatch")).toBeInTheDocument();
    expect(screen.getByText("Tagline PT")).toBeInTheDocument();
    expect(screen.getByText("2026")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "/projetos/animatch"
    );
  });

  it("renders the en tagline when locale is en", () => {
    render(
      <LocaleProvider initialLocale="en">
        <ProjectCard project={project} />
      </LocaleProvider>
    );
    expect(screen.getByText("Tagline EN")).toBeInTheDocument();
  });
});
