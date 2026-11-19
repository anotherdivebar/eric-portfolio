/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        ink: "#13242d",
        muted: "#526269",
        panel: "#eaf0eb",
        border: "#d1d9d5",
        accent: "#12685f",
        "accent-dark": "#104d47",
        mint: "#a6e3cf"
      }
    }
  },
  plugins: []
};
