import { type Palette } from "./palette.alias.js";

export interface ThemeColors {
  primary: string;
  secondary: string;
  tertiary: string;
  neutral: string;
  neutralVariant: string;
  error: string;
}

export type ThemeMode = "light" | "dark" | "system";

export interface ThemeSettings {
  palettes: {
    primary: string;
    secondary: string;
    tertiary: string;
    neutral: string;
    neutralVariant: string;
    error: string;
  };
  mode: ThemeMode;
}

export default interface Theme {
  primary: Palette;
  secondary: Palette;
  tertiary: Palette;
  neutral: Palette;
  neutralVariant: Palette;
  error: Palette;
  primaryBase: string;
  secondaryBase: string;
  tertiaryBase: string;
  neutralBase: string;
  neutralVariantBase: string;
  errorBase: string;
  bg: string;
  primaryBackground: string;
  secondaryBackground: string;
  surface: string;
  surfaceAlt: string;
  surfaceContainer: string;
  surfaceContainerHover: string;
  surfaceContainerFilled: string;
  surfaceContainerFilledHover: string;
  onSurface: string;
  border: string;
  text: string;
  textMuted: string;
  accent: string;
  accentHover: string;
  accentActive: string;
  primaryTitle: string;
  primaryContainer: string;
  primaryContainerHover: string;
  primaryOnContainer: string;
  primaryContainerFilled: string;
  primaryContainerFilledHover: string;
  onPrimaryContainer: string;
  errorContainer: string;
  onErrorContainer: string;
  errorBorder: string;

  logoPrimary: string;
  logoSecondary: string;
  logoTertiary: string;
  logoNeutral: string;
  logoNeutralVariant: string;
  logoError: string;
}
