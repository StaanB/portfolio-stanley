import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { StatusBadge } from "@/components/StatusBadge";
import { LocaleProvider } from "@/lib/i18n";

describe("StatusBadge", () => {
  it("renders the pt label for employed with a green dot", () => {
    render(
      <LocaleProvider initialLocale="pt">
        <StatusBadge state="employed" />
      </LocaleProvider>
    );
    expect(
      screen.getByText("Empregado, mas aberto a conversar")
    ).toBeInTheDocument();
    expect(screen.getByTestId("status-dot")).toHaveClass("bg-green-500");
  });

  it("renders the en label for open_to_work with an orange dot", () => {
    render(
      <LocaleProvider initialLocale="en">
        <StatusBadge state="open_to_work" />
      </LocaleProvider>
    );
    expect(screen.getByText("Open to new opportunities")).toBeInTheDocument();
    expect(screen.getByTestId("status-dot")).toHaveClass("bg-[#FF6B1A]");
  });
});
