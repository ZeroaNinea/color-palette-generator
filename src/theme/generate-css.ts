import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";

import createTheme from "@/theme/index.js";
import type Theme from "@/types/theme.interface.js";
import type { ThemeColors } from "@/types/theme.interface.js";

function toKebabCase(value: string): string {
  return value.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
}

function generateVariables(theme: Theme): string {
  const variables: string[] = [];

  for (const [key, value] of Object.entries(theme)) {
    if (typeof value === "object" && value !== null) {
      for (const [shade, color] of Object.entries(value)) {
        variables.push(`  --${key}-${shade}: ${color};`);
      }
    } else {
      variables.push(`  --${toKebabCase(key)}: ${value};`);
    }
  }

  return variables.join("\n");
}

export default async function generateCSS(
  colors: ThemeColors,
  outputPath = "./css/theme.css",
): Promise<void> {
  const lightTheme = createTheme(colors, "light");
  const darkTheme = createTheme(colors, "dark");

  const css = `
:root,
:root[data-theme="light"] {
${generateVariables(lightTheme)}
}

:root[data-theme="dark"] {
${generateVariables(darkTheme)}
}

@media (prefers-color-scheme: dark) {
  :root[data-theme="system"] {
${generateVariables(darkTheme)
  .split("\n")
  .map((line) => `  ${line}`)
  .join("\n")}
  }
}

@media (prefers-color-scheme: light) {
  :root[data-theme="system"] {
${generateVariables(lightTheme)
  .split("\n")
  .map((line) => `  ${line}`)
  .join("\n")}
  }
}
`.trim();

  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, css, "utf-8");
}
