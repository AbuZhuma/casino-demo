import { create } from "zustand";
import { persist } from "zustand/middleware";
import { GEO_CONFIG } from "../../configs/geo";
import { GeoState } from "./types";

export const useGeoStore = create<GeoState>()(
  persist(
    (set) => ({
      geo: "UK",
      language: GEO_CONFIG["UK"].defaultLanguage,

      setGeo: (geo) =>
        set({
          geo,
          language: GEO_CONFIG[geo].defaultLanguage,
        }),

      setLanguage: (language) =>
        set({
          language,
        }),
    }),
    {
      name: "geo-storage",
    }
  )
);
