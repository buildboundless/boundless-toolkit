export interface Theme {
  // Colors
  primaryColor: string;
  secondaryColor: string;
  surfaceColor: string;
  backgroundColor: string;
  errorColor: string;

  // Typography
  fontFamily: string;
  fontSize: number;
  fontWeight: "normal" | "bold";

  // Elevation
  elevationLow: number;
  elevationMedium: number;
  elevationHigh: number;
}

export const defaultTheme: Theme = {
  // Colors
  primaryColor: "#6200EE",
  secondaryColor: "#03DAC6",
  surfaceColor: "#FFFFFF",
  backgroundColor: "#FFFFFF",
  errorColor: "#B00020",

  // Typography
  fontFamily: "Roboto",
  fontSize: 14,
  fontWeight: "normal",

  // Elevation
  elevationLow: 2,
  elevationMedium: 4,
  elevationHigh: 8,
};
