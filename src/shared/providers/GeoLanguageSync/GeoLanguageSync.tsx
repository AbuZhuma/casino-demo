import { useEffect } from "react";
import { useGeoStore } from "../../store/geoStore/geo.store";
import i18n from "../../i18n/i18n";
import { DEFAULT_GEO } from "../../const";
import { GeoCode } from "../../configs/geo";

export const GeoLanguageSync = () => {
  const language = useGeoStore((s) => s.language);
  const geoStore = useGeoStore()

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);
  
  useEffect(() => {
    if (DEFAULT_GEO) {
      geoStore.setGeo(DEFAULT_GEO as GeoCode)
    }
  }, [DEFAULT_GEO])

  return null;
};
