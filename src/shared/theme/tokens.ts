export type ThemePreset =
  | "emerald"
  | "violet"
  | "sunset"
  | "ocean"
  | "ruby";

export const themeTokens: Record<
  ThemePreset,
  {
    primary: string;
    secondary: string;
    background: string;
    gradient: string;
  }
> = {
  emerald: {
    primary: "#10B981",
    secondary: "#34D399",
    background: "#0B1220",
    gradient: "linear-gradient(135deg, #10B981, #34D399)",
  },

  violet: {
    primary: "#8B5CF6",
    secondary: "#A78BFA",
    background: "#0B0B14",
    gradient: "linear-gradient(135deg, #8B5CF6, #A78BFA)",
  },

  sunset: {
    primary: "#FF8D6B",
    secondary: "#FFBA47",
    background: "#0B1220",
    gradient:
      "linear-gradient(84.38deg, #FF8D6B 7.59%, #FFBA47 96.71%)",
  },

  ocean: {
    primary: "#0EA5E9",
    secondary: "#38BDF8",
    background: "#07131F",
    gradient: "linear-gradient(135deg, #0EA5E9, #38BDF8)",
  },

  ruby: {
    primary: "#E11D48",
    secondary: "#FB7185",
    background: "#160B0F",
    gradient: "linear-gradient(135deg, #E11D48, #FB7185)",
  },
};
