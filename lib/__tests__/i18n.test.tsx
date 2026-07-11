import { describe, expect, it, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { detectInitialLocale, LocaleProvider, useLocale } from "@/lib/i18n";

describe("detectInitialLocale", () => {
  it("prefers a stored locale over navigator language", () => {
    expect(
      detectInitialLocale({ stored: "en", navigatorLanguage: "pt-BR" })
    ).toBe("en");
  });

  it("falls back to navigator language when nothing is stored", () => {
    expect(
      detectInitialLocale({ stored: null, navigatorLanguage: "en-US" })
    ).toBe("en");
  });

  it("defaults to pt when navigator language is pt-BR", () => {
    expect(
      detectInitialLocale({ stored: null, navigatorLanguage: "pt-BR" })
    ).toBe("pt");
  });

  it("defaults to pt when nothing is available", () => {
    expect(
      detectInitialLocale({ stored: null, navigatorLanguage: undefined })
    ).toBe("pt");
  });
});

function Consumer() {
  const { locale, setLocale, t } = useLocale();
  return (
    <div>
      <span data-testid="locale">{locale}</span>
      <span data-testid="label">{t("navProjects")}</span>
      <button onClick={() => setLocale(locale === "pt" ? "en" : "pt")}>
        toggle
      </button>
    </div>
  );
}

describe("LocaleProvider + useLocale", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("provides the initial locale and translates a key", () => {
    render(
      <LocaleProvider initialLocale="pt">
        <Consumer />
      </LocaleProvider>
    );
    expect(screen.getByTestId("locale").textContent).toBe("pt");
    expect(screen.getByTestId("label").textContent).toBe("Projetos");
  });

  it("toggles locale and persists it to localStorage", () => {
    render(
      <LocaleProvider initialLocale="pt">
        <Consumer />
      </LocaleProvider>
    );
    fireEvent.click(screen.getByText("toggle"));
    expect(screen.getByTestId("locale").textContent).toBe("en");
    expect(screen.getByTestId("label").textContent).toBe("Projects");
    expect(localStorage.getItem("locale")).toBe("en");
  });
});
