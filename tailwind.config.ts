// Importing config types of tailwindCSS
import type { Config } from 'tailwindcss'

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
      colors: {
        theme: '#090f1e'
      }
    }
  },
  plugins: [],
}

// Exporting configs
export default config;