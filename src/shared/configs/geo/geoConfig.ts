import { mainLogoImage } from "../../../assets/images";
import { AppLanguage } from "../../i18n";
import { ThemePreset } from "../../theme";

export type GeoCode =
  | "UK"
  | "DE"
  | "TR"
  | "KZ"
  | "RU";

export type GeoConfig = {
  code: GeoCode;
  label: string;
  defaultLanguage: AppLanguage;
  assets: {
    heroImageUrl: string;
    logoUrl: string;
  };
  themePreset: ThemePreset;
};

export const GEO_CONFIG: Record<GeoCode, GeoConfig> = {
  UK: {
    code: "UK",
    label: "United Kingdom",
    defaultLanguage: "en",
    assets: {
      heroImageUrl: "https://picsum.photos/seed/uk/1200/700",
      logoUrl: mainLogoImage,
    },
    themePreset: "emerald",
  },

  DE: {
    code: "DE",
    label: "Germany",
    defaultLanguage: "de",
    assets: {
      heroImageUrl: "https://picsum.photos/seed/de/1200/700",
      logoUrl: mainLogoImage,
    },
    themePreset: "violet",
  },

  TR: {
    code: "TR",
    label: "Turkey",
    defaultLanguage: "tr",
    assets: {
      heroImageUrl: "https://picsum.photos/seed/tr/1200/700",
      logoUrl: mainLogoImage,
    },
    themePreset: "sunset",
  },

  KZ: {
    code: "KZ",
    label: "Kazakhstan",
    defaultLanguage: "kk",
    assets: {
      heroImageUrl: "https://picsum.photos/seed/kz/1200/700",
      logoUrl: mainLogoImage,
    },
    themePreset: "ocean",
  },

  RU: {
    code: "RU",
    label: "Russia",
    defaultLanguage: "ru",
    assets: {
      heroImageUrl: "https://picsum.photos/seed/ru/1200/700",
      logoUrl: mainLogoImage,
    },
    themePreset: "ruby",
  },
};
