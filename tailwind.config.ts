import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "label-colorslc-l-secondary": "var(--label-colorslc-l-secondary)",
        "system-materialssm-l-thick": "var(--system-materialssm-l-thick)",
      },
      fontFamily: {
        "default-size-body": "var(--default-size-body-font-family)",
      },
    },
  },
  plugins: [],
} satisfies Config;
