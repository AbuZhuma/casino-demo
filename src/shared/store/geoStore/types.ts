import { GeoCode } from "../../configs/geo";
import { AppLanguage } from "../../i18n";

export type GeoState = {
  geo: GeoCode;
  language: AppLanguage;

  setGeo: (geo: GeoCode) => void;
  setLanguage: (lng: AppLanguage) => void;
};
