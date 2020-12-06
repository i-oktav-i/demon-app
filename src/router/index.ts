import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Graphs from '../views/Graphs.vue';
import About from '../views/About.vue';
import Form from '../views/Form.vue';
import Store from '../views/Store.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/graphs',
    name: 'Graphs',
    component: Graphs,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/form',
    name: 'Form',
    component: Form,
  },
  {
    path: '/store',
    name: 'Store',
    component: Store,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
