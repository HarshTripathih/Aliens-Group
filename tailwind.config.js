/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '320px',
        // => @media (min-width: 320px) { ... }
      
        'xs': '360px',
        // => @media (min-width: 360px) { ... }
      
        'xsm': '480px',
        // => @media (min-width: 480px) { ... }
      },
      fontFamily: {
        cormorant: 'var(--font-cormorant)',
        inter: 'var(--font-inter)',
        playfair: 'var(--font-playfair)',
        geistSans: 'var(--font-geistSans)',
        geistMono: 'var(--font-geistMono)',
        lato: 'var(--font-lato)',
        // Add more here
      },
    },
  },
  plugins: [],
}
