export interface Theme {
  // Colors
  primaryColor: string;
  secondaryColor: string;
  surfaceColor: string;
  backgroundColor: string;
  errorColor: string;

  // Typography
  typography: {
    display: ThemeTypography;
    headline: ThemeTypography;
    title: ThemeTypography;
    body: ThemeTypography;
    label: ThemeTypography;
  };

  // Elevation
  elevationLow: number;
  elevationMedium: number;
  elevationHigh: number;
}

export interface ThemeTypography {
  fontFamily: string;
  fontSize: number;
  fontWeight: "normal" | "bold";
}

export const defaultTheme: Theme = {
  // Colors
  primaryColor: "#6200EE",
  secondaryColor: "#03DAC6",
  surfaceColor: "#FFFFFF",
  backgroundColor: "#FFFFFF",
  errorColor: "#B00020",

  // Typography
  typography: {
    display: {
      fontFamily: "Roboto",
      fontSize: 34,
      fontWeight: "bold",
    },
    headline: {
      fontFamily: "Roboto",
      fontSize: 24,
      fontWeight: "bold",
    },
    title: {
      fontFamily: "Roboto",
      fontSize: 20,
      fontWeight: "bold",
    },
    body: {
      fontFamily: "Roboto",
      fontSize: 16,
      fontWeight: "normal",
    },
    label: {
      fontFamily: "Roboto",
      fontSize: 12,
      fontWeight: "normal",
    },
  },

  // Elevation
  elevationLow: 2,
  elevationMedium: 4,
  elevationHigh: 8,
};
