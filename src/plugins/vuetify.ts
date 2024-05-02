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
    themes: {
      custom: {
        dark: true,
        colors: {
          primary: colors.purple.darken4, // #E53935
          secondary: colors.purple.darken1, // #FFCDD2
        }
      },
    },
  }
})

