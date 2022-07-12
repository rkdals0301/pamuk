import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import router from '@/router'
import VueCompositionAPI from '@vue/composition-api'
import { createPinia, PiniaVuePlugin } from 'pinia'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueCompositionAPI)
Vue.use(PiniaVuePlugin)


const pinia = createPinia()

new Vue({
  vuetify,
  router,
  pinia,
  render: h => h(App)
}).$mount('#app')
