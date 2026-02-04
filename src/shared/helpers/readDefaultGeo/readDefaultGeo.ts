import { GEO_CONFIG, GeoCode } from "../../configs/geo";
import { DEFAULT_GEO } from "../../const";

export function readDefaultGeo(): GeoCode {
  const envGeo = (DEFAULT_GEO as GeoCode | undefined) ?? "RU";
  return GEO_CONFIG[envGeo] ? envGeo : "RU";
}  