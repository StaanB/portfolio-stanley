import { describe, expect, it } from "vitest";
import { careerStatus, getStatusLabel, getStatusColor } from "@/content/status";

describe("careerStatus", () => {
  it("defaults to employed", () => {
    expect(careerStatus.state).toBe("employed");
  });
});

describe("getStatusLabel", () => {
  it("returns the pt label for the current state", () => {
    expect(getStatusLabel("employed", "pt")).toBe(
      "Empregado, mas aberto a conversar"
    );
  });

  it("returns the en label for the current state", () => {
    expect(getStatusLabel("employed", "en")).toBe(
      "Currently employed, open to a conversation"
    );
  });

  it("returns the label for open_to_work when state changes", () => {
    expect(getStatusLabel("open_to_work", "pt")).toBe(
      "Buscando novas oportunidades"
    );
  });
});

describe("getStatusColor", () => {
  it("returns green for employed", () => {
    expect(getStatusColor("employed")).toBe("green");
  });

  it("returns orange for open_to_work", () => {
    expect(getStatusColor("open_to_work")).toBe("orange");
  });
});
