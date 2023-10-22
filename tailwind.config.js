/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                KumbhBold: ['"KumbhBold"', 'sans-serif'],
                KumbhRegular: ['"KumbhRegular"', 'sans-serif'],
            },
            colors: {
              lightBlue: '#829CFF',
              accentBlue: '#5175FF',
              accentRed: '#F05B5B',
              lightGray: '#747B95',
              dark: '#333950',
              veryDark: '#25293A'
            }
        },
    },
    plugins: [],
};
