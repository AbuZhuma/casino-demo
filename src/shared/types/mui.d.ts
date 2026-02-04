import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      gradient: string;
    };
  }

  interface ThemeOptions {
    custom?: {
      gradient?: string;
    };
  }
}
