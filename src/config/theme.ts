/**
 * Buyer-editable file.
 * Pick a preset by changing ONE line: activePreset.
 */
export const theme = {
  activePreset: "gold", // classic | dark | gold
  fonts: {
    // Next/font will use these later (we'll wire it in the next step).
    heading: "Montserrat",
    body: "Inter",
  },
  tokens: {
    radius: {
      sm: "10px",
      md: "14px",
      lg: "18px",
    },
    shadow: {
      sm: "0 1px 2px rgba(0,0,0,.08)",
      md: "0 8px 24px rgba(0,0,0,.14)",
    },
  },
} as const;

export type ThemeConfig = typeof theme;
export type ThemePreset = ThemeConfig["activePreset"];
