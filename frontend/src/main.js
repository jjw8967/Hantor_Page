import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'

Vue.use(Vuex);
Vue.prototype.$http = axios

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    baseUrl : "http://localhost:8000"
  },
  
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
