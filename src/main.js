import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { PullRefresh, Lazyload } from 'vant'
import ElementUI from 'element-ui'

import './assets/styles/base.scss'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(PullRefresh)
Vue.use(Lazyload, {
  lazyComponent: true,
  preload: 1.3
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
