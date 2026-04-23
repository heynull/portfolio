import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        mono: ['clutch', 'Courier New', 'monospace'],
        sans: ['clutch', 'Courier New', 'monospace'],
        serif: ['clutch', 'Courier New', 'monospace'],
      },
      colors: {
        background: '#fafafa',
      },
      lineHeight: {
        relaxed: '1.6',
      },
    },
  },
  plugins: [],
};

export default config;
