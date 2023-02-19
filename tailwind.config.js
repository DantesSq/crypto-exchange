/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        colors: {
            primaryL: '#0083f8',
            primaryD: '#080808',
            secondD: '#121318',
            white: '#ffffff',
            gray: '#babcc3',
            grayL: '#f5f5f5',
            text: '#6b6e7c',
            blue: '#3f50d5',
            red: '#df3939',
            green: '#3cba8d',
            black: '#000000',
        },
        container: { center: true },
    },
    plugins: [],
};
