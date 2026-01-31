/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        ink: "#0e0f12",
        muted: "#5a616d",
        panel: "#f4f6f8",
        border: "#e2e6ea",
        accent: "#1f4fd1",
        "accent-dark": "#163ba0"
      }
    }
  },
  plugins: []
};
