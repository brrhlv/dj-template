import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        // Neo-brutalist color extensions
        'electric-black': 'hsl(var(--electric-black))',
        'electric-white': 'hsl(var(--electric-white))',
        'void-black': 'hsl(var(--void-black))',
        'neon-cyan': 'hsl(var(--neon-cyan))',
        'volt-yellow': 'hsl(var(--volt-yellow))',
        'magenta-shock': 'hsl(var(--magenta-shock))',
        'toxic-green': 'hsl(var(--toxic-green))',
        'concrete': {
          100: 'hsl(var(--concrete-100))',
          200: 'hsl(var(--concrete-200))',
          300: 'hsl(var(--concrete-300))',
          400: 'hsl(var(--concrete-400))',
        },
      },
      borderRadius: {
        lg: "0rem", // Brutalism: no rounded corners
        md: "0rem",
        sm: "0rem",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      maxWidth: {
        'container': '1400px',
      },
      boxShadow: {
        'brutalist-sm': '4px 4px 0px 0px rgba(0, 217, 255, 0.3)',
        'brutalist': '8px 8px 0px 0px rgba(0, 217, 255, 0.3)',
        'brutalist-lg': '12px 12px 0px 0px rgba(0, 217, 255, 0.5)',
        'brutalist-yellow': '8px 8px 0px 0px rgba(255, 204, 0, 0.3)',
        'brutalist-magenta': '8px 8px 0px 0px rgba(255, 0, 128, 0.3)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
