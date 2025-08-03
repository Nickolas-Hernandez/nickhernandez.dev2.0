export default defineAppConfig({
  // https://ui.nuxt.com/getting-started/theme#design-system
  ui: {
    color: {
      primary: '2B2B2B',
      primaryHover: '1f1f1f',
      primarySoft: '3C3C3C',

      accent: 'F3E8D9',
      accentHover: 'e8dac5',
      accentSubtle: 'f9f5f0',

      backgroundLight: 'FFFFFF',
      backgroundSubtle: 'F8F6F3',
      borderGray: 'DCDCDC',

      textBody: 'EAEAEA',
      textMuted: 'A8A8A8',
      textDarkOnLight: '2B2B2B',
      textAccent: 'C7B6A0',

      highlight: 'B5835A',
      success: 'A0C49D',
      info: '9BB1C7'
    },
    container: {
        base: 'w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8'
    }
  },
  footer: {
        credits: `Copyright © ${new Date().getFullYear()}`,
        links: [{
            'icon': 'i-simple-icons-github',
            'to': 'https://github.com/Nickolas-Hernandez',
            'target': '_blank',
            'aria-label': 'Nick Hernandez on GitHub'
            }, {
            'icon': 'i-simple-icons-linkedin',
            'to': 'https://www.linkedin.com/in/nickolashernandez/',
            'target': '_blank',
            'aria-label': 'Nick Hernandez on Discord'
            }, {
            'icon': 'i-simple-icons-x',
            'to': 'https://x.com/xnickhernandez',
            'target': '_blank',
            'aria-label': 'Nick Hernandez on X'
        }]
    }
})
