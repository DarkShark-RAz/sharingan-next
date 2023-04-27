/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-sharingan':
          'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(110,12,12,1) 39%, rgba(75,8,8,1) 60%, rgba(0,0,0,1) 100%)',
      },
    },
  },
  plugins: [],
};
