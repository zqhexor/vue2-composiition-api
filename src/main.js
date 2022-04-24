import Vue from 'vue'
import App from './App.vue'
import router from './router'
import CompositionApi from '@vue/composition-api'
import { createPinia, PiniaVuePlugin } from 'pinia'

Vue.config.productionTip = false
Vue.use(CompositionApi)
Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
  router,
  pinia,
  render: h => h(App)
}).$mount('#app')
