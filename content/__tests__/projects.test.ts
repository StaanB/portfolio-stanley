import { describe, expect, it } from "vitest";
import { projects } from "@/content/projects";

describe("projects", () => {
  it("has all 6 cases", () => {
    expect(projects).toHaveLength(6);
  });

  it("sorts by endDate desc, ongoing work (no endDate) grouped by date desc", () => {
    const slugs = projects.map((p) => p.slug);
    expect(slugs).toEqual([
      "este-portfolio",
      "animatch",
      "prolog-app",
      "stanley-ia",
      "dpms",
      "digitalize",
    ]);
  });

  it("gives Prolog App no endDate (ongoing)", () => {
    const prolog = projects.find((p) => p.slug === "prolog-app");
    expect(prolog?.endDate).toBeUndefined();
  });

  it("marks DPMS and Digitalize as employer type", () => {
    const dpms = projects.find((p) => p.slug === "dpms");
    const digitalize = projects.find((p) => p.slug === "digitalize");
    expect(dpms?.type).toBe("employer");
    expect(digitalize?.type).toBe("employer");
  });

  it("marks the meta case with type meta and no screenshot", () => {
    const meta = projects.find((p) => p.slug === "este-portfolio");
    expect(meta?.type).toBe("meta");
    expect(meta?.hasScreenshot).toBe(false);
  });

  it("marks AniMatch and DPMS as having a screenshot, Digitalize without one", () => {
    const animatch = projects.find((p) => p.slug === "animatch");
    const dpms = projects.find((p) => p.slug === "dpms");
    const digitalize = projects.find((p) => p.slug === "digitalize");
    expect(animatch?.hasScreenshot).toBe(true);
    expect(dpms?.hasScreenshot).toBe(true);
    expect(digitalize?.hasScreenshot).toBe(false);
  });

  it("has bilingual tagline, summary, role and highlights for every project", () => {
    for (const project of projects) {
      expect(project.tagline.pt).toBeTruthy();
      expect(project.tagline.en).toBeTruthy();
      expect(project.summary.pt).toBeTruthy();
      expect(project.summary.en).toBeTruthy();
      expect(project.role.pt).toBeTruthy();
      expect(project.role.en).toBeTruthy();
      expect(project.highlights.length).toBeGreaterThan(0);
    }
  });
});
