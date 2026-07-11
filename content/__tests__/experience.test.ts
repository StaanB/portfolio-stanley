import { describe, expect, it } from "vitest";
import { experience } from "@/content/experience";

describe("experience", () => {
  it("has all 4 entries from the CV", () => {
    expect(experience).toHaveLength(4);
  });

  it("sorts by startDate desc, current job (no endDate) first", () => {
    const companies = experience.map((e) => e.company);
    expect(companies).toEqual([
      "Prolog App",
      "Oxeanbits",
      "Instituto Mix de Profissões",
      "Freelance",
    ]);
  });

  it("has no endDate for the current job", () => {
    const prolog = experience.find((e) => e.company === "Prolog App");
    expect(prolog?.endDate).toBeUndefined();
  });

  it("has bilingual role for every entry", () => {
    for (const entry of experience) {
      expect(entry.role.pt).toBeTruthy();
      expect(entry.role.en).toBeTruthy();
    }
  });
});
