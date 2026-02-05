import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "./resources";

export const supportedLngs = [
  "en",
  "de",
  "tr",
  "kk",
  "ru",
] as const;

export type AppLanguage = typeof supportedLngs[number];

export const languageLabels: Record<AppLanguage, string> = {
  en: "English",
  de: "Deutsch",
  tr: "Türkçe",
  kk: "Қазақша",
  ru: "Русский",
};

export const languageFlags: Record<AppLanguage, string> = {
  en: "🇬🇧",
  de: "🇩🇪",
  tr: "🇹🇷",
  kk: "🇰🇿",
  ru: "🇷🇺",
};

i18n.use(initReactI18next).init({
  resources,    
  lng: "en",
  fallbackLng: "en",    
  supportedLngs: [...supportedLngs],
  interpolation: { escapeValue: false },
});

export default i18n;
