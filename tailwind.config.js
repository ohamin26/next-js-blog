const { relative } = require('path')

/** @type {import('tailwindcss').Config} */
module.exports = {
    extend: {},
    variants: {},
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            xs: { max: '649px' },
            sm: { min: '650px', max: '819px' },
            md: { min: '820px', max: '959px' },
            lg: { min: '960px' },
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}
