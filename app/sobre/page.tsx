import type { Metadata } from "next";
import { SobrePage } from "@/components/SobrePage";

export const metadata: Metadata = {
  title: "Sobre — Stanley Brenner",
  description:
    "Bio, experiência e skills de Stanley Brenner, desenvolvedor Pleno-Sênior full-stack AI-first.",
};

export default function Sobre() {
  return <SobrePage />;
}
