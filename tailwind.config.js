module.exports = {
    darkMode: ['class'],
    content: ['./pages/**/*.{ts,tsx,vue}', './components/**/*.{ts,tsx,vue}', './app/**/*.{ts,tsx,vue}', './src/**/*.{ts,tsx,vue}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            spacing: {
                section: '8rem',
            },
            colors: {
                'primary': '#1fb6ff',
                'secondary': '#5352ed',
                'tertiary': '#ff4757',

                'black': {
                    DEFAULT: '#3D3B3E',
                    100: '#3D3B3E70',
                },
                'white': '#ffffff',
                'blue': '#1fb6ff',
                'purple': '#7e5bef',
                'pink': '#ff49db',
                'orange': {
                    400: '#ffaa49',
                    500: '#ff7849',
                },
                'green': {
                    50: '#f2faf1',
                    100: '#def7e4',
                    200: '#bcf0da',
                    300: '#84e1bc',
                    400: '#31c48d',
                    500: '#13ce66',
                },
                'yellow': '#ffc82c',
                'gray-dark': '#273444',
                'gray': '#8492a6',
                'gray-light': '#d3dce6',
            },
        },
    },
    plugins: [],
}
