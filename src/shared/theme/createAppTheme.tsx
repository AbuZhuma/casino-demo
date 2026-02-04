import { createTheme } from "@mui/material/styles";
import { themeTokens, type ThemePreset } from "./tokens";

export function createAppTheme(preset: ThemePreset) {
  const t = themeTokens[preset];

  return createTheme({
    palette: {
      mode: "dark",

      primary: {
        main: t.primary,
        light: t.secondary,
        dark: t.primary,
        contrastText: "#fff",
      },

      background: {
        default: t.background,
        paper: "#0F172A", 
      },

      text: {
        primary: "#FFFFFF",
        secondary: "rgba(255,255,255,0.7)",
      },

      divider: "rgba(255,255,255,0.08)",
    },

    shape: {
      borderRadius: 16,
    },

    typography: {
      fontFamily: "Inter, system-ui, Arial, sans-serif",

      h1: { fontWeight: 800 },
      h2: { fontWeight: 800 },
      h3: { fontWeight: 700 },

      button: {
        fontWeight: 600,
        letterSpacing: 0,
      },
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            background: t.background,
          },
        },
      },

      MuiButton: {
        defaultProps: {
          disableElevation: true, 
        },

        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: 14,
            fontWeight: 600,
            padding: "12px 20px",
          },

          contained: {
            background: t.gradient, 
            color: "#fff",

            "&:hover": {
              background: t.gradient,
              filter: "brightness(1.05)",
            },
          },
        },
      },

      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none", 
          },
        },
      },
    },

    custom: {
      gradient: t.gradient,
    },
  });
}
