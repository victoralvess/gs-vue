import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-126702299-1'
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
