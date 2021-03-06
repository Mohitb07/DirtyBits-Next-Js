const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.css",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  darkMode: "class",
  plugins: [require("tailwind-scrollbar-hide")],
  theme: {
    fontFamily: {
      dance: ['"Dancing Script"'],
      secondary: ['"Space Grotesk"'],
    },
    screens: {
      xs: "630px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "custom-yellow": "#FB7A16",
        "custom-yellow2": "#FF6663",
        "custom-maroon": "#410B3B",
        "custom-background": "#06202A",
        "custom-bg": "#AB61F7",
        "custom-indigo": "#6366F1",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
