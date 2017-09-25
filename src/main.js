import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'

Vue.config.productionTip = false

Vue.use(VueFire)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
