import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#007bff',
                secondary: '#6c757d',
                danger: '#dc3545',
            },
            screens: {
                xs: '420px',
                '3xl': '1800px',
            }
        },
    },
    plugins: [],
}
export default config
