export type CareerState = "employed" | "open_to_work";
export type Locale = "pt" | "en";

export const careerStatus = {
  state: "employed" as CareerState,
  labels: {
    employed: {
      pt: "Empregado, mas aberto a conversar",
      en: "Currently employed, open to a conversation",
    },
    open_to_work: {
      pt: "Buscando novas oportunidades",
      en: "Open to new opportunities",
    },
  },
};

export function getStatusLabel(state: CareerState, locale: Locale): string {
  return careerStatus.labels[state][locale];
}

export function getStatusColor(state: CareerState): "green" | "orange" {
  return state === "employed" ? "green" : "orange";
}
