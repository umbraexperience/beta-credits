import Vue from 'vue'
import App from './App.vue'
import Autoscroll from 'vue-autoscroll'

Vue.config.productionTip = false
Vue.use(Autoscroll)

new Vue({
  render: h => h(App),
}).$mount('#app')


