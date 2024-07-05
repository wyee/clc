/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./assets/**/*.js", '*.html'],
    theme: {
        extend: {
            backgroundColor: {
                'black-pearl': '#132030',
                'catalina-blue': '#183460',
                'light-orange': '#f9e1de',
            },
            fontFamily: {
                'fraunces': ["Fraunces", "serif"],
                'montserrat': ["Montserrat", "sans-serif"],
            }
        },
    },
    plugins: [],
}

