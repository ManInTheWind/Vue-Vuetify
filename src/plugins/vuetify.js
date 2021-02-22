import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#08d9d6',
        secondary: '#252a34',
        anchor: '#393e46',
        default: '#eaeaea',
        highlight: '#fc5185'
      },
    },
  },
  breakpoint:{
    scrollBarWidth:0
  }
});