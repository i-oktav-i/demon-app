import Vue from 'vue';
import VueSplide from '@splidejs/vue-splide';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueSplide);
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
