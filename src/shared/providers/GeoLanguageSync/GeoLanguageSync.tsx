import { useEffect } from "react";
import { useGeoStore } from "../../store/geoStore/geo.store";
import i18n from "../../i18n/i18n";

export const GeoLanguageSync = () => {
  const language = useGeoStore((s) => s.language);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return null;
};
