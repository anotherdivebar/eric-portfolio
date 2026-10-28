/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        ink: "#17231f",
        muted: "#5d6a63",
        panel: "#edf1e9",
        border: "#dce3dc",
        accent: "#176958",
        "accent-dark": "#104d42",
        mint: "#ccebb8"
      }
    }
  },
  plugins: []
};
