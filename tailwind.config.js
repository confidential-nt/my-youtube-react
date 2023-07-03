/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "yt-red": "#ff0000",
        "yt-black": "#1a191c",
        "yt-grey": "#5d5d63",
        "yt-light-grey": "#737375",
      },
    },
  },
  plugins: [],
};
