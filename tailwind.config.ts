import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        blue: {
          50: "#E5EBFF",
          100: "#AFBDFE",
          700: "#0038FF",
        },
        gray: {
          50: "#E9EEF3",
        },
        yellow: {
          50: "#FEFBEB",
        },
        brown: {
          900: "#BB5E14",
        },
        red: {
          500: "#EF4243",
        },
      },
    },
  },
  plugins: [],
}
export default config
