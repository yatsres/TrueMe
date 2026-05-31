/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'trueme': {
          'lime-bright': '#d2ff72',      // яскраво-зелений (лайм)
          'yellow-light': '#fffb9f',     // світло-жовтий
          'orange-bright': '#ff751f',    // яскраво-помаранчевий
          'orange-light': '#ffa53b',     // світлий помаранчевий
          'mint': '#a3d4c4',             // м'ятний/бірюзовий
          'green-olive': '#a8cb5e',      // оливково-зелений
          'coral': '#d64c49',            // коралово-червоний
          'green-dark': '#427047',       // темно-зелений
          // Legacy colors for compatibility
          'bg': '#ECE9E2',
          'green': '#427047',
          'orange': '#ff751f',
          'lime': '#d2ff72',
          'dark': '#2B2B2B',
          'light': '#F5F3ED',
        }
      },
      fontSize: {
        'hero-lg': ['120px', { lineHeight: '0.9', letterSpacing: '-0.06em' }],
        'hero-md': ['84px', { lineHeight: '0.9', letterSpacing: '-0.06em' }],
        'hero-sm': ['52px', { lineHeight: '0.9', letterSpacing: '-0.06em' }],
        'section-lg': ['128px', { lineHeight: '0.9', letterSpacing: '-0.05em' }],
        'section-md': ['92px', { lineHeight: '0.9', letterSpacing: '-0.05em' }],
        'section-sm': ['64px', { lineHeight: '0.9', letterSpacing: '-0.05em' }],
        'trueme-title': ['56px', { fontWeight: '900', lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'trueme-subtitle': ['32px', { fontWeight: '700', lineHeight: '1.3', letterSpacing: '-0.02em' }],
        'trueme-subheading': ['36px', { fontWeight: '900', lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'trueme-heading': ['44px', { fontWeight: '700', lineHeight: '1.1', letterSpacing: '-0.04em' }],
        'trueme-large-text': ['20px', { fontWeight: '400', lineHeight: '1.6', letterSpacing: '-0.01em' }],
        'trueme-body': ['16px', { fontWeight: '400', lineHeight: '1.6', letterSpacing: '0em' }],
        'trueme-nav': ['14px', { fontWeight: '600', lineHeight: '1.2', letterSpacing: '0em' }],
        'trueme-button': ['16px', { fontWeight: '700', lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'trueme-caption': ['16px', { fontWeight: '700', lineHeight: '1.6', letterSpacing: '0em' }],
      },
      spacing: {
        'section-gap': '140px',
        'section-gap-sm': '80px',
        'element-gap': '60px',
      },
      borderRadius: {
        'xl-rounded': '48px',
        'pill': '1000px',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.8s ease-out',
      },
    },
  },
  plugins: [],
};
