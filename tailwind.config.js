/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        Main: ['Inter', 'sans-serif']
      },
      fontSize: {
        headerSection: '24px',
        headerBlock: '18px',
        paragaphSection: '16px',
        paragaphBlock: '16px',
        cta: '16px',
        desktopHeaderSection: '32px'
      },
      screens: {
        small: { max: '362px' },
        medium: { min: '382px', max: '431px' },
        mediumxl: { min: '432px', max: '620px' },
        phones: { max: '767px' },
        tablets: { min: '768px', max: '1024px' },
        default: { min: '1024px', max: '1899px' },
        xxl: { min: '1900px' }
      },
      spacing: {
        nav: '24px',
        header: '24px',
        paragaph: '48px',
        cta: '64px',
        section: '96px'
      },
      colors: {
        bodyBg: '#0B0B14',
        block: '#121221',
        blockBorder: '#2E2E54',
        textGray: '#9ca3af',
        textGrayBlock: '#9ca3af'
      },
      animation: {
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0.2, 0.6, 1) infinite;',
        'ping-btn': 'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;'
      },
      backgroundImage: {
        'pros-quality': "url('/pros-quality-b4.png)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
};
