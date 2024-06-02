/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: ["./src/**/*.{html,tsx,jsx,js,ts}"],
    theme: {
        extend: {
            colors: {
                ct: {
                    blue: "#377dff",
                    green: "#38cb89",
                    yellow: "#ffab00",
                    red: "#ff5630",
                    gray: "#4e5d78",
                    dark: {
                        1: "#212833",
                        2: "#191C21",
                    },
                },
            },
            fontFamily: {
                Roboto: ["Roboto", "sans-serif"],
            },
        },
        screens: {
            tablet: "640px",
            // => @media (min-width: 640px) { ... }

            laptop: "1024px",
            // => @media (min-width: 1024px) { ... }

            desktop: "1280px",
            // => @media (min-width: 1280px) { ... }
        },
    },
    plugins: [
        require("@tailwindcss/forms")({
            strategy: "class",
        }),
    ],
});
