const config = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

  plugins: [require('flowbite/plugin')],

  darkMode: 'class',

  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3'
      },
      colors: {
        primary: '#1c4095',
        secondary: '#f26532'
      },
      screens: {
        sm: '450px',
        md: '750px',
        lg: '1000px',
        xl: '1280px',
        '2xl': '1500px'
      },
      maxWidth: {
        sm: '450px',
        md: '750px',
        lg: '1000px',
        xl: '1280px',
        '2xl': '1500px'
      }
    }
  },
  corePlugins: {
    borders: false,
    preflight: false
  }
}