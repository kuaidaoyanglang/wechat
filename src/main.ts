import Vue from 'vue';

import App from './app.vue';
import router from './router';
import store from './store/index';
import './registerServiceWorker';
import '@/utils/axios';
import filters from './utils/filters';

import 'styles/index.styl';

console.log(process.env.VUE_APP_TEST, process.env.NODE_ENV)

Vue.use(filters);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
