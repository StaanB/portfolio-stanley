import { describe, expect, it } from "vitest";
import { dictionaries } from "@/content/dictionaries";

describe("dictionaries", () => {
  it("has matching keys in pt and en", () => {
    const ptKeys = Object.keys(dictionaries.pt).sort();
    const enKeys = Object.keys(dictionaries.en).sort();
    expect(enKeys).toEqual(ptKeys);
  });

  it("has no empty string values", () => {
    for (const locale of ["pt", "en"] as const) {
      for (const [key, value] of Object.entries(dictionaries[locale])) {
        expect(value, `${locale}.${key}`).not.toBe("");
      }
    }
  });

  it("has a nav label for the projects list and the about page", () => {
    expect(dictionaries.pt.navProjects).toBeTruthy();
    expect(dictionaries.pt.navAbout).toBeTruthy();
    expect(dictionaries.en.navProjects).toBeTruthy();
    expect(dictionaries.en.navAbout).toBeTruthy();
  });

  it("has a label for the next-project link", () => {
    expect(dictionaries.pt.nextProject).toBeTruthy();
    expect(dictionaries.en.nextProject).toBeTruthy();
  });
});
