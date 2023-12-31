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
            maxWidth: {container: '1884px'},
            fontFamily: {primary: ['var(--font-sf-pro)', 'sans-serif']},
            boxShadow: {
                galaxy: '0 5px 15px #c955ff66',
                blueNeon: '0 6px 22px #056dda4d',
                greenNeon: '0 6px 18px #0ea1514d'
            },
            colors: {
                theme: '#090f1e',
                lightTheme: '#192033',
                yellow: '#ffb800',
                lighterYellow: '#fff173',
                violet: '#d062ff',
                lightBlue: '#7bb0ff',
                blue: '#0095ff',
                andriodLighterGreen: '#A9E200',
                green: '#31bc69',
                darkerGreen: '#089e4e',
                telegramBlue: '#08c',
                telegramLightBlue: '#0fb1d6',
                instagramYellow: '#ffc90c',
                instagramPink: '#ed146e',
                instagramPurple: '#7e2bf4',
                facebookBlue: '#4267b2',
                facebookLightBlue: '#82a4e9',
            },
        }
    },
    plugins: [],
}

// Exporting configs
export default config;