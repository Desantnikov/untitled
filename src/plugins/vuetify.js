import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

const opts = {theme: {
        themes: {
            light: {
                primary: colors.grey.base, // #E53935
                secondary: colors.grey.darken3, // #FFCDD2
                accent: colors.blueGrey.lighten2, // #3F51B5
                background: colors.brown.base,
            },
        },
    },}

export default new Vuetify(opts)
