import React, { useEffect } from "react";
import { InputLabel, MenuItem, Select } from "@mui/material";
import {
    GeoControl,
    SelectorWrapper,
    StyledFormControl,
} from "./GeoSelector.styles";
import { useGeoStore } from "../../shared/store/geoStore/geo.store";
import { GEO_CONFIG, GeoCode } from "../../shared/configs/geo";
import { AppLanguage, languageLabels, supportedLngs } from "../../shared/i18n";


export const GeoSelector: React.FC = () => {
    const { geo, language, setGeo, setLanguage } = useGeoStore();

    useEffect(() => {
        
    }, [])
    return (
        <SelectorWrapper>

            <GeoControl size="small">
                <InputLabel>Geo</InputLabel>

                <Select
                    label="Geo"
                    value={geo}
                    onChange={(e) => setGeo(e.target.value as GeoCode)}
                >
                    {Object.values(GEO_CONFIG).map((g) => (
                        <MenuItem key={g.code} value={g.code}>
                            {g.label}
                        </MenuItem>
                    ))}
                </Select>
            </GeoControl>


            <StyledFormControl size="small">
                <InputLabel>Language</InputLabel>

                <Select
                    label="Language"
                    value={language}
                    onChange={(e) =>
                        setLanguage(e.target.value as AppLanguage)
                    }
                >
                    {supportedLngs.map((lng) => (
                        <MenuItem key={lng} value={lng}>
                            {languageLabels[lng]}
                        </MenuItem>
                    ))}
                </Select>
            </StyledFormControl>

        </SelectorWrapper>
    );
};
