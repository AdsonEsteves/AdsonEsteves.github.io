import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from "./store";

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
