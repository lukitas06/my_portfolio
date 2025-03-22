import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'fade-out-down': 'fade-out-down linear forwards',
        'card-left-to-right': 'card-left-to-right linear forwards',

      },
      keyframes: {

        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'fade-out-down': {  
          from: {
            opacity: '1',
            transform: 'translateY(0)',
          },
          to: {
            opacity: '0',
            transform: 'translateY(40%)',
          }

        },
        'card-left-to-right': {
          from: {
            opacity: '0',
            transform: 'translateX(-100%)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          }
        },

      },
      supports: {
        'no-scroll-driven-animations': 'not(animation-timeline: scroll())',
      }
    },
  },
  plugins: [],
} satisfies Config;
