import createPalette from "@/theme/palette.util.js";
import type Theme from "@/types/theme.interface.js";

import { type ThemeColors, type ThemeMode } from "@/types/theme.interface.js";

export default function createTheme(
  { primary, secondary, tertiary, neutral, neutralVariant, error }: ThemeColors,
  mode: ThemeMode,
): Theme {
  // const resolveMode = resolveThemeMode(mode);
  const resolveMode = mode;

  const palettes = {
    primary: createPalette(primary),
    secondary: createPalette(secondary),
    tertiary: createPalette(tertiary),
    neutral: createPalette(neutral),
    neutralVariant: createPalette(neutralVariant),
    error: createPalette(error),
  };

  if (resolveMode === "light") {
    const theme: Theme = {
      ...palettes,
      primaryBase: primary,
      secondaryBase: secondary,
      tertiaryBase: tertiary,
      neutralBase: neutral,
      neutralVariantBase: neutralVariant,
      errorBase: error,
      bg: palettes.neutral["50"],
      primaryBackground: palettes.primary["50"],
      secondaryBackground: palettes.secondary["50"],
      surface: palettes.neutral["900"],
      surfaceAlt: palettes.neutral["800"],
      surfaceContainer: palettes.neutral["100"],
      surfaceContainerHover: palettes.neutral["200"],
      surfaceContainerFilled: palettes.neutral["600"],
      surfaceContainerFilledHover: palettes.neutral["700"],
      onSurface: palettes.neutralVariant["900"],
      border: palettes.neutralVariant["500"],
      text: palettes.neutral["900"],
      textMuted: palettes.neutral["600"],
      accent: palettes.secondary["500"],
      accentHover: palettes.secondary["600"],
      accentActive: palettes.secondary["700"],
      primaryTitle: palettes.primary["900"],
      primaryContainer: palettes.primary["100"],
      primaryContainerHover: palettes.primary["200"],
      primaryOnContainer: palettes.primary["900"],
      primaryContainerFilled: palettes.primary["600"],
      primaryContainerFilledHover: palettes.primary["700"],
      onPrimaryContainer: palettes.primary["50"],
      errorContainer: palettes.error["100"],
      onErrorContainer: palettes.error["50"],
      errorBorder: palettes.error["500"],

      logoPrimary: palettes.primary["900"],
      logoSecondary: palettes.secondary["300"],
      logoTertiary: palettes.tertiary["300"],
      logoNeutral: palettes.neutral["300"],
      logoNeutralVariant: palettes.neutralVariant["300"],
      logoError: palettes.error["300"],
    };

    return theme;
  } else {
    const theme = {
      ...palettes,
      primaryBase: primary,
      secondaryBase: secondary,
      tertiaryBase: tertiary,
      neutralBase: neutral,
      neutralVariantBase: neutralVariant,
      errorBase: error,
      bg: palettes.neutral["900"],
      primaryBackground: palettes.primary["900"],
      secondaryBackground: palettes.secondary["900"],
      surface: palettes.neutral["50"],
      surfaceAlt: palettes.neutral["100"],
      surfaceContainer: palettes.neutral["100"],
      surfaceContainerHover: palettes.neutral["200"],
      surfaceContainerFilled: palettes.neutral["700"],
      surfaceContainerFilledHover: palettes.neutral["400"],
      onSurface: palettes.neutralVariant["100"],
      border: palettes.neutralVariant["400"],
      text: palettes.neutral["50"],
      textMuted: palettes.neutral["300"],
      accent: palettes.secondary["400"],
      accentHover: palettes.secondary["300"],
      accentActive: palettes.secondary["200"],
      primaryTitle: palettes.primary["100"],
      primaryContainer: palettes.primary["200"],
      primaryContainerHover: palettes.primary["700"],
      primaryOnContainer: palettes.primary["100"],
      primaryContainerFilled: palettes.primary["700"],
      primaryContainerFilledHover: palettes.primary["400"],
      onPrimaryContainer: palettes.primary["50"],
      errorContainer: palettes.error["900"],
      onErrorContainer: palettes.error["50"],
      errorBorder: palettes.error["400"],

      logoPrimary: palettes.primary["50"],
      logoSecondary: palettes.secondary["200"],
      logoTertiary: palettes.tertiary["200"],
      logoNeutral: palettes.neutral["200"],
      logoNeutralVariant: palettes.neutralVariant["200"],
      logoError: palettes.error["200"],
    };

    return theme;
  }
}
