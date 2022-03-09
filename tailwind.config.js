module.exports = {
  important: true,
  // Active dark mode on class basis
  darkMode: "class",
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  purge: {
    content: [
      "./pages/**/*.tsx",
      "./components/**/*.tsx",
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html",
    ],
    // These options are passed through directly to PurgeCSS
  },
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
    },
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
  },
};
