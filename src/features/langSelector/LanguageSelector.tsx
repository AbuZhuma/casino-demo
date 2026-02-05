import MenuItem from "@mui/material/MenuItem";

import {
  supportedLngs,
  languageLabels,
  AppLanguage,
  languageFlags,
} from "../../shared/i18n";

import { useGeoStore } from "../../shared/store/geoStore/geo.store";
import KeyboardArrowDownRounded from "@mui/icons-material/KeyboardArrowDownRounded";
import { LangControl, LangSelect } from "./LanguageSelector.styles";

export const LanguageSelector = () => {
  const { language, setLanguage } = useGeoStore();

  return (
    <LangControl size="small">

      <LangSelect
        value={language}
        IconComponent={KeyboardArrowDownRounded}
        onChange={(e) =>
          setLanguage(e.target.value as AppLanguage)
        }
        displayEmpty
      >
        {supportedLngs.map((lng) => (
        <MenuItem key={lng} value={lng}>
            <span style={{ marginRight: 10 }}>
            {languageFlags[lng]}
            </span>

            {languageLabels[lng]}
        </MenuItem>
        ))}
      </LangSelect>

    </LangControl>
  );
};
