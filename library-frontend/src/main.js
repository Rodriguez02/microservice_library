import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import store from './store'


Vue.prototype.$axios = axios

Vue.config.productionTip = false
axios.defaults.withCredentials = true

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')