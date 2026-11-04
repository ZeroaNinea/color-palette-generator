import generateCSS from "@/theme/generate-css.js";

import type { ThemeColors } from "@/types/theme.interface.js";

const colors: ThemeColors = {
  primary: "#6750A4",
  secondary: "#625B71",
  tertiary: "#7D5260",
  neutral: "#79747E",
  neutralVariant: "#79747E",
  error: "#B3261E",
};

await generateCSS(colors);
