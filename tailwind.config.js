/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            Neutral: {
                primary: "#2879fe",
                secondary: "#fead28",
                white: "#FFFFFF",
                black: "#191919",
            },
        },
        fontFamily: {
            sans: ["Graphik", "sans-serif"],
            serif: ["Merriweather", "serif"],
            Poppins: ["Poppins"],
        },
        extend: {
            maxWidth: {
                container: "1440px",
            },
        },
        screens: {
            sm: "420px",
            md: "840px",
            lg: "1440px",
        },
    },
    plugins: [],
};
