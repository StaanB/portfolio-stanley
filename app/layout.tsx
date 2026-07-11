import type { Metadata } from "next";
import { Archivo_Black, Work_Sans } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/i18n";
import { AppShell } from "@/components/AppShell";

const archivoBlack = Archivo_Black({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stanley Brenner — Desenvolvedor Full Stack",
  description:
    "Portfólio de Stanley Brenner, desenvolvedor full stack AI-first (React, Next.js, Node.js, TypeScript).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${archivoBlack.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0A0908] font-body text-[#F2ECE3]">
        <LocaleProvider initialLocale="pt">
          <AppShell>{children}</AppShell>
        </LocaleProvider>
      </body>
    </html>
  );
}
