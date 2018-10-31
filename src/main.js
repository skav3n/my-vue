import Vue from 'vue';
import VueFire from 'vuefire';
import VueMaterial from 'vue-material';
import App from './App';
import router from './router';
import store from './store';
import CommonComponents from './common';

import './style.scss';

Vue.config.productionTip = false;

Vue.use(VueFire);
Vue.use(VueMaterial);
Vue.use(CommonComponents);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  render: h => h(App),
});
