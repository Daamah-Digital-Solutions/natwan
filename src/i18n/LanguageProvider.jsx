import { createContext, useContext, useEffect, useState, useCallback } from "react";

const LanguageContext = createContext(null);

const STORAGE_KEY = "natwan-lang";

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "en";
    return localStorage.getItem(STORAGE_KEY) || "en";
  });

  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = dir;
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang, dir]);

  const toggle = useCallback(() => {
    setLang((l) => (l === "en" ? "ar" : "en"));
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, dir, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}

// Pick the active-language slice of a { en, ar } content object.
// eslint-disable-next-line react-refresh/only-export-components
export function useContent(bundle) {
  const { lang } = useLang();
  return bundle[lang] ?? bundle.en;
}
