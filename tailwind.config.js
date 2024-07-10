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
            },
            keyframes : {
                toast: {
                    '0%': {
                      transform: 'translateX(calc(100% + 64px))',
                    },
                    '100%': {
                      transform: 'translateX(0)',
                    },
                },
                'fade-out': {
                    '0%': {
                      opacity: 1,
                    },
                    '100%': {
                      opacity: 0,
                    },
                },
            },
            animation: {
                toast: 'toast 800ms cubic-bezier(0, 0.46, 0, 1.04) both',
                fadeout: 'fade-out 500ms ease-out forwards',
            },
        },
    },
    plugins: [],
};
