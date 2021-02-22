import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import FastClick from 'fastclick'

import VueLazyLoad from 'vue-lazyload';
FastClick.attach(document.body)

Vue.config.productionTip = false

Vue.use(VueLazyLoad, {
  error: '', //加载失败的图
  loading: '' //加载中的默认图
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')