import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        mono: ['Courier New', 'Courier', 'ui-monospace', 'monospace'],
        sans: ['Courier New', 'Courier', 'ui-monospace', 'monospace'],
        serif: ['Courier New', 'Courier', 'ui-monospace', 'monospace'],
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
