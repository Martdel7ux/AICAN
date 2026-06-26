import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm editorial palette
        canvas: "#F6F4EF", // warm ivory base
        paper: "#FCFBF8", // lighter card surface
        ink: "#16130F", // warm near-black for headlines
        body: "#3A352E", // warm body text
        muted: "#807868", // muted warm gray
        faint: "#A8A092", // faintest text/labels
        line: "#E6E1D6", // hairline borders
        accent: {
          DEFAULT: "#0E6E63", // deep teal
          deep: "#0A4A43",
          soft: "#E4EFEC",
        },
        // dark surfaces for jewel/code moments
        obsidian: "#100E0B",
        coal: "#1A1713",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.025em",
      },
      maxWidth: {
        container: "1180px",
        prose: "680px",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.6)", opacity: "0.5" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1.1s step-end infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        "pulse-ring": "pulse-ring 3s cubic-bezier(0.22,1,0.36,1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
