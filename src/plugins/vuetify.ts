import 'vuetify/styles'
import {createVuetify} from "vuetify";
import {aliases, mdi} from "vuetify/iconsets/mdi";
import {md2} from "vuetify/blueprints";
import colors from 'vuetify/util/colors'

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
  blueprint: md2,
  defaults: {
    global: {
      elevation: 4
    }
  },
  theme: {
    defaultTheme: "custom",
    themes: {
      custom: {
        dark: true,
        colors: {
          primary: colors.deepPurple.lighten2,
          secondary: colors.teal.lighten2,
          error: colors.red.accent4
        }
      },
    },
  }
})

