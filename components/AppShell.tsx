"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useLocale, detectInitialLocale } from "@/lib/i18n";
import { careerStatus } from "@/content/status";
import { StatusBadge } from "@/components/StatusBadge";
import { PageTransition } from "@/components/PageTransition";
import { FlagBR, FlagUS } from "@/components/FlagIcon";

export function AppShell({ children }: { children: React.ReactNode }) {
  const { locale, setLocale, t } = useLocale();

  useEffect(() => {
    const detected = detectInitialLocale({
      stored: window.localStorage.getItem("locale"),
      navigatorLanguage: window.navigator.language,
    });
    if (detected !== locale) setLocale(detected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed left-0 top-0 z-10 h-[180px] w-[260px] sm:h-[250px] sm:w-[400px]"
        style={{
          background:
            "radial-gradient(ellipse at 0% 0%, rgba(10,9,8,0.94) 0%, rgba(10,9,8,0.8) 42%, rgba(10,9,8,0) 78%)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          maskImage:
            "radial-gradient(ellipse at 0% 0%, #000 0%, #000 42%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 0% 0%, #000 0%, #000 42%, transparent 78%)",
        }}
        aria-hidden
      />

      <header className="fixed left-0 top-0 z-20 flex flex-col gap-3 p-6 sm:p-8">
        <Link
          href="/"
          className="font-display text-lg uppercase tracking-wide text-[#FF6B1A]"
        >
          Stanley B.
        </Link>
        <nav className="flex gap-4 text-sm uppercase text-[#A89E92]">
          <Link href="/" className="transition-colors hover:text-[#FF6B1A]">
            {t("navProjects")}
          </Link>
          <Link
            href="/sobre"
            className="transition-colors hover:text-[#FF6B1A]"
          >
            {t("navAbout")}
          </Link>
        </nav>
      </header>

      <main className="min-h-screen px-6 pb-24 pt-32 sm:px-8 sm:pt-[212px]">
        <PageTransition>{children}</PageTransition>
      </main>

      <footer className="footer-strip fixed bottom-0 left-0 right-0 z-20 hidden items-center justify-between gap-4 border-t border-[#2A241C] bg-[#0A0908] px-6 py-3 text-xs text-[#A89E92] sm:flex">
        <StatusBadge state={careerStatus.state} />
        <div className="flex items-center gap-4">
          <a
            href="mailto:stanleybrenner@gmail.com"
            className="transition-colors hover:text-[#FF6B1A]"
          >
            {t("contactEmail")}
          </a>
          <a
            href="https://www.linkedin.com/in/stanley-brenner-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#FF6B1A]"
          >
            {t("contactLinkedIn")}
          </a>
          <a
            href="https://github.com/StaanB"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#FF6B1A]"
          >
            {t("contactGitHub")}
          </a>
        </div>
        <button
          onClick={() => setLocale(locale === "pt" ? "en" : "pt")}
          className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
          aria-label={t("languageToggle")}
        >
          <FlagBR className={`h-3.5 w-3.5 ${locale === "pt" ? "" : "opacity-40"}`} />
          <FlagUS className={`h-3.5 w-3.5 ${locale === "en" ? "" : "opacity-40"}`} />
        </button>
      </footer>
    </>
  );
}
