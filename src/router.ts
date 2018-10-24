import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/wechat'
    },
    {
      path: '/:page',
      name: 'home'
    },
    {
      path: '/wechat/dialog',
      name: 'dialog',
      component: () => import('@/views/dialog/dialog.vue')
    }
  ],
});
