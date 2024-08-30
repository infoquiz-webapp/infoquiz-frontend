import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import { fontFamily } from "tailwindcss/defaultTheme";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|card|divider|spinner|table|tabs|ripple|checkbox|spacer).js"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--nextui-background))",
        foreground: {
          50: "hsl(var(--nextui-foreground-50))",
          100: "hsl(var(--nextui-foreground-100))",
          200: "hsl(var(--nextui-foreground-200))",
          300: "hsl(var(--nextui-foreground-300))",
          400: "hsl(var(--nextui-foreground-400))",
          500: "hsl(var(--nextui-foreground-500))",
          600: "hsl(var(--nextui-foreground-600))",
          700: "hsl(var(--nextui-foreground-700))",
          800: "hsl(var(--nextui-foreground-800))",
          900: "hsl(var(--nextui-foreground-900))",
          DEFAULT: "hsl(var(--nextui-foreground))",
        },
        primary: {
          50: "hsl(var(--nextui-primary-50))",
          100: "hsl(var(--nextui-primary-100))",
          200: "hsl(var(--nextui-primary-200))",
          300: "hsl(var(--nextui-primary-300))",
          400: "hsl(var(--nextui-primary-400))",
          500: "hsl(var(--nextui-primary-500))",
          600: "hsl(var(--nextui-primary-600))",
          700: "hsl(var(--nextui-primary-700))",
          800: "hsl(var(--nextui-primary-800))",
          900: "hsl(var(--nextui-primary-900))",
          DEFAULT: "hsl(var(--nextui-primary))",
          foreground: "hsl(var(--nextui-primary-foreground))",
        },
        secondary: {
          50: "hsl(var(--nextui-secondary-50))",
          100: "hsl(var(--nextui-secondary-100))",
          200: "hsl(var(--nextui-secondary-200))",
          300: "hsl(var(--nextui-secondary-300))",
          400: "hsl(var(--nextui-secondary-400))",
          500: "hsl(var(--nextui-secondary-500))",
          600: "hsl(var(--nextui-secondary-600))",
          700: "hsl(var(--nextui-secondary-700))",
          800: "hsl(var(--nextui-secondary-800))",
          900: "hsl(var(--nextui-secondary-900))",
          DEFAULT: "hsl(var(--nextui-secondary))",
          foreground: "hsl(var(--nextui-secondary-foreground))",
        },
        default: {
          50: "hsl(var(--nextui-default-50))",
          100: "hsl(var(--nextui-default-100))",
          200: "hsl(var(--nextui-default-200))",
          300: "hsl(var(--nextui-default-300))",
          400: "hsl(var(--nextui-default-400))",
          500: "hsl(var(--nextui-default-500))",
          600: "hsl(var(--nextui-default-600))",
          700: "hsl(var(--nextui-default-700))",
          800: "hsl(var(--nextui-default-800))",
          900: "hsl(var(--nextui-default-900))",
          DEFAULT: "hsl(var(--nextui-default))",
          foreground: "hsl(var(--nextui-default-foreground))",
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
        "7xl": "3.5rem",
        "8xl": "4rem",
        "9xl": "4.5rem",
        "10xl": "5rem",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      fontSize: {
        "size-h1": "clamp(3.2rem, .5692rem + 8.238vw, 13.75rem)",
        "size-h2": "clamp(2.5rem, 1.0982rem + 4.2857vw, 7.5rem)",
        "size-h3": "clamp(2.25rem, 1.0982rem + 3.5714vw, 5rem)",
        "size-h4": "clamp(1.5rem, 1.0982rem + 1.7143vw, 2.8125rem)",
        "size-h5": "clamp(1.375rem, 1.1837rem + .8163vw, 2rem)",
        "size-h6": "clamp(1.375rem, 1.1837rem + .8163vw, 1.6rem)",
        "size-h7": "clamp(1rem, .9235rem + .3265vw, 1.25rem)",
        "size-body": "clamp(1rem, .8852rem + .4898vw, 1.375rem)",
        "size-link": "clamp(.875rem, .7985rem + .3265vw, 1.125rem)",
        "size-mini": "clamp(.875rem, .8367rem + .1633vw, 1rem)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    addVariablesForColors,
    tailwindcssAnimate,
    nextui({
      themes: {
        light: {
          colors: {
            foreground: "#111827",
            background: "#FFF",
            content1: "#f3f4f6",
            content2: "#e5e7eb",
            content3: "#d1d5db",
            content4: "#9ca3af",
            default: {
              50: "#f9fafb",
              100: "#f3f4f6",
              200: "#e5e7eb",
              300: "#d1d5db",
              400: "#9ca3af",
              500: "#6b7280",
              600: "#4b5563",
              700: "#374151",
              800: "#1f2937",
              900: "#111827",
            },
            danger: {
              50: "#ffe5e5",
              100: "#fdb7b8",
              200: "#f6898a",
              300: "#f15b5b",
              400: "#ec2e2d",
              500: "#d21513",
              600: "#a40e0e",
              700: "#760809",
              800: "#480304",
              900: "#1e0000",
              DEFAULT: "#ec2e2d",
              foreground: "#FFF",
            },
          },
        },
        dark: {
          colors: {
            foreground: "#FFF",
            background: "#111827",
            content1: "#1f2937",
            content2: "#374151",
            content3: "#4b5563",
            content4: "#6b7280",
            default: {
              50: "#111827",
              100: "#1f2937",
              200: "#374151",
              300: "#4b5563",
              400: "#6b7280",
              500: "#9ca3af",
              600: "#d1d5db",
              700: "#e5e7eb",
              800: "#f3f4f6",
              900: "#f9fafb",
            },
            danger: {
              50: "#ffe7e7",
              100: "#f5c0c0",
              200: "#e89697",
              300: "#de6e6e",
              400: "#d34545",
              500: "#ba2c2c",
              600: "#912121",
              700: "#691717",
              800: "#400b0c",
              900: "#1c0101",
              DEFAULT: "#912121",
              foreground: "#FFF",
            },
          },
        },
      },
    }),
  ],
} satisfies Config;

export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
