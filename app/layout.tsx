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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const title = "Stanley Brenner — Desenvolvedor Full Stack";
const description =
  "Portfólio de Stanley Brenner, desenvolvedor full stack AI-first (React, Next.js, Node.js, TypeScript).";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
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
