"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { dictionaries, type DictionaryKey } from "@/content/dictionaries";

export type Locale = "pt" | "en";

const STORAGE_KEY = "locale";

export function detectInitialLocale({
  stored,
  navigatorLanguage,
}: {
  stored: string | null;
  navigatorLanguage: string | undefined;
}): Locale {
  if (stored === "pt" || stored === "en") return stored;
  if (navigatorLanguage?.toLowerCase().startsWith("en")) return "en";
  return "pt";
}

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: DictionaryKey) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  children,
  initialLocale,
}: {
  children: ReactNode;
  initialLocale: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
    }
  }, []);

  const t = useCallback(
    (key: DictionaryKey) => dictionaries[locale][key],
    [locale]
  );

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within a LocaleProvider");
  return ctx;
}
