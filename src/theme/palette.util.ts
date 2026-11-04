import chroma from "chroma-js";
import { type Palette } from "@/types/palette.alias.js";

export default function createPalette(base: string): Palette {
  const scale = chroma
    .scale([chroma(base).brighten(3), base, chroma(base).darken(3)])
    .mode("lab")
    .colors(10);

  const palette: Palette = {
    50: scale[0] || "",
    100: scale[1] || "",
    200: scale[2] || "",
    300: scale[3] || "",
    400: scale[4] || "",
    500: scale[5] || "",
    600: scale[6] || "",
    700: scale[7] || "",
    800: scale[8] || "",
    900: scale[9] || "",
  };

  return palette;
}
