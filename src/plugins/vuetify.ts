import 'vuetify/styles'
import {createVuetify} from "vuetify";
import {aliases, mdi} from "vuetify/iconsets/mdi";
import {md2} from "vuetify/blueprints";

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
  blueprint: md2,
  theme: {
    defaultTheme: 'dark',
  }
})

