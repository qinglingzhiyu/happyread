import Vue from 'vue'
import App from './App'
import WXpromisify from './utils/promisify'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$promisify = WXpromisify

const app = new Vue(App)
app.$mount()
