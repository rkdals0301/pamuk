import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import router from '@/router'
import store from '@/store'
import '@/utils/error'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
