/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
    content: ["./assets/**/*.js", '*.html'],
    plugins: {
        'postcss-import': {},
        tailwindcss: {},
        autoprefixer: {},
        margin: {},
        padding: {},
        text: {},
    },
    theme: {
        extend: {
            colors: {
                'black-pearl': '#132030',
                'catalina-blue': '#183460',
                'celestial-blue': '#5199d3',
                // 'light-orange': '#f9e1de',
                'light-orange': '#f5cac4',
                'tea-rose': '#f5cac4',
                'tea-rose-45': 'rgba(245, 202, 196, 0.45)',
                'fuchsia-rose': '#ff4c0d',
                'nero':  '#242424',
                'alabaster': '#ecebe4',
                'onyx': '#424242',
                'kellyish-green': '#55a330',
                'navy': '#244c8a',
                'pearl-white': '#f6f5f1'
            },
            backgroundColor: {
                'black-pearl': '#132030',
                'catalina-blue': '#183460',
                'celestial-blue': '#5199d3',
                // 'light-orange': '#f9e1de',
                'light-orange': '#f5cac4',
                'light-gray': '#f9f9f9',
                'tea-rose': '#f5cac4',
                'tea-rose-45': 'rgba(245, 202, 196, 0.45)',
                'fuchsia-rose': '#ff4c0d',
                'nero':  '#242424',
                'alabaster': '#ecebe4',
                'onyx': '#424242',
                'kellyish-green': '#55a330',
                'navy': '#244c8a',
                'pearl-white': '#f6f5f1'
            },
            fontFamily: {
                'fraunces': ["Fraunces", "serif"],
                'montserrat': ["Montserrat", "sans-serif"],
            },
            fontSize: {
                '2xl': ['1.375rem',],
                '6xl': ['4rem', '4.4rem'],
                '7xl': ['5rem','5.5rem'],
            },
            container: {
                screens: {
                    'sm': '576px',
                    // => @media (min-width: 576px) { ... }

                    'md': '960px',
                    // => @media (min-width: 960px) { ... }

                    'lg': '1440px',
                    // => @media (min-width: 1440px) { ... }
                },
            },
            maxWidth: {
                '600': '37.5rem',
            },
            padding: {
              '70': '70px',
              '80': '80px',
            },
            gridTemplateColumns: {
                '3': 'repeat(3, minmax(0, 1fr))',
            },
            plugins: [
                plugin(function ({addComponents}) {
                    addComponents({
                        '.btn': {
                            padding: '.5rem 1rem',
                            borderRadius: '.25rem',
                            fontWeight: '600',
                        },
                        '.btn-blue': {
                            backgroundColor: '#3490dc',
                            color: '#fff',
                            '&:hover': {
                                backgroundColor: '#2779bd'
                            },
                        },
                        '.btn-red': {
                            backgroundColor: '#e3342f',
                            color: '#fff',
                            '&:hover': {
                                backgroundColor: '#cc1f1a'
                            },
                        },
                    })
                })
            ],
        },
    },
    plugins: [],
}

