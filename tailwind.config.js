/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        colors: {
            primaryL: '#0083f8',
            primaryD: '#080808',
            gray: '',
            white: '#ffffff',
        },
        container: { center: true },
    },
    plugins: [],
};
