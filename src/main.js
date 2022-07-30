import Vue from 'vue'
import App from '@/App.vue'
import vuetify from '@/plugins/vuetify'
import VueRouter from 'vue-router'
import router from '@/router'
import store from '@/store'
import '@/utils/error'
import _ from 'lodash'

Vue.config.productionTip = false
Vue.use(VueRouter)

Vue.prototype.$_ = _

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
