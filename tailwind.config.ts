// Importing config types of tailwindCSS
import type {Config} from 'tailwindcss'

// Defining configs of tailwindCSS
const config: Config = {
    content: [
        './component/*.{ts,tsx,js,jsx}',
        './component/**/*.{ts,tsx,js,jsx}',
        './chunk/*.{ts,tsx,js,jsx}',
        './chunk/**/*.{ts,tsx,js,jsx}',
        './app/*.{ts,tsx,js,jsx}',
        './app/**/*.{ts,tsx,js,jsx}',
    ],
    theme: {
        extend: {
            maxWidth: {container: '1100px'},
            fontFamily: {primary: ['var(--font-sf-pro)', 'sans-serif']},
            boxShadow: {galaxy: '0 5px 15px #c955ff66'},
            colors: {
                theme: '#090f1e',
                lightTheme: '#192033',
                yellow: '#ffb800',
                lighterYellow: '#fff173',
                violet: '#d062ff',
                lightBlue: '#7bb0ff',
                andriodLighterGreen: '#A9E200',
            },
        }
    },
    plugins: [],
}

// Exporting configs
export default config;