import React, { useMemo } from "react";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { createAppTheme } from "../../theme/createAppTheme";
import { GlobalStyle } from "../../ui/GlobalStyle";
import { GEO_CONFIG } from "../../configs/geo";
import { useGeoStore } from "../../store/geoStore/geo.store";

export const AppProviders: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { geo } = useGeoStore();
  const preset = GEO_CONFIG[geo].themePreset;

  const muiTheme = useMemo(() => createAppTheme(preset), [preset]);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <StyledThemeProvider theme={muiTheme}>
        <CssBaseline />
        <GlobalStyle />
        {children}
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
};
