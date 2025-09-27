// src/plugins/vuetify.js

// Styles
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#212121', // A dark grey for primary elements
          surface: '#FFFFFF', // White surface
          background: '#F5F5F5', // A very light grey background
        }
      }
    }
  }
})
