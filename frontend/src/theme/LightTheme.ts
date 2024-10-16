import type { ThemeTypes } from '@/types/themeTypes/ThemeType';

const BLUE_THEME: ThemeTypes = {
    name: 'BLUE_THEME',
    dark: false,
    variables: {
        'border-color': '#e5eaef'
    },
    colors: {
        primary: '#0085db',
        secondary: '#707a82',
        info: '#46caeb',
        success: '#4bd08b',
        warning: '#f8c076',
        error: '#fb977d',
        indigo: '#8763da',
        lightprimary: '#e5f3fb',
        lightinfo: '#e1f5fa',
        lightsecondary: '#e7ecf0',
        lightsuccess: '#dffff3',
        lighterror: '#ffede9',
        lightwarning: '#fff6ea',
        lightindigo: '#f1ebff',
        textPrimary: '#2A3547',
        textSecondary: '#2A3547',
        borderColor: '#e5eaef',
        inputBorder: '#DFE5EF',
        containerBg: '#ffffff',
        background: '#f0f5f9',
        hoverColor: '#f6f9fc',
        surface: '#fff',
        grey100: '#707a82',
        grey200: '#111c2d',
        darkbg: '#2a3447',
        bglight: '#f5f8fb',
        bgdark: '#111c2d',

        // Tailwind colors
        "theme-primary": "#5368DF",
        "theme-secondary": "#FA5757",
        "theme-grayish-blue": "#9194A1",
        "theme-dark-blue": "rgb(37, 43, 70)",
        "theme-dark-blue-tp": "rgba(37, 43, 70, 0.9)",
        "theme-slate-100": "rgb(241, 245, 249)",
        "theme-gray-500": "rgb(248, 250, 252)"

    }
};


export { BLUE_THEME };
