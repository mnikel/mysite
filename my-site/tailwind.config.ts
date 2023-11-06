import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'background': '#1E1E1E',
      'class': '#4EC9B0',
      'keyword': '#569CD6',
      'variable': '#9CDCFE',
      'string': '#CE9178',
      'number': '#B5CEA8',
      'yellowbracket': '#FFD701',
      'pinkbracket': '#DA7FD6',
      'indent': '#404040',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    keyframes: {
      typing: {
        "0%": {
          width: "0%",
          visibility: "hidden"
        },
        "100%": {
          width: "100%"
        }  
      },
      blink: {
        "50%": {
          borderColor: "transparent"
        },
        "100%": {
          borderColor: "white"
        }  
      }
    },
    animation: {
      typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
    }
  },
  plugins: [],
}
export default config
