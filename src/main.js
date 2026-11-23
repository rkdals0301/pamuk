import { createApp } from 'vue'
import App from '@/App.vue'
import vuetify from '@/plugins/vuetify'
import router from '@/router'
import store from '@/store'
import reportError from '@/utils/error'

const app = createApp(App)
app.config.errorHandler = reportError
app.use(vuetify).use(store).use(router).mount('#app')
