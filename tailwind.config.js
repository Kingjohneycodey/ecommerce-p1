/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background), <alpha-value>)",
        foreground: "hsl(var(--foreground), <alpha-value>)",
        brand: {
          primary: "hsl(var(--brand-primary), <alpha-value>)",
          secondary: "hsl(var(--brand-secondary),  <alpha-value>)",
        },
        secondary: "hsl(var(--secondary), <alpha-value>)",
        destructive: "hsl(var(--destructive), <alpha-value>)",
        muted: "hsl(var(--muted), <alpha-value>)",
        "muted-foreground": "hsl(var--muted-foreground), <alpha-value>)",
        accent: "hsl(var(--accent), <alpha-value>)",
        "accent-foreground": "hsl(var(--accent-foreground), <alpha-value>)",
        neutral: {
          DEFAULT: "hsl(var(--neutral), <alpha-value>)",
          100: "hsl(var(--neutral-100), <alpha-value>)",
          "foreground-100": "hsl(var(--neutral-foreground-100), <alpha-value>)",
          "foreground-200": "hsl(var(--neutral-foreground-200), <alpha-value>)",
          "foreground-300": "hsl(var(--neutral-foreground-300), <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
