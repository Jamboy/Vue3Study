/*
 * @Description: routes
 * @Author: Jamboy
 * @Date: 2022-08-24 09:49:11
 * @LastEditTime: 2022-10-09 15:06:07
 */
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/lifecycle',
      name: 'lifecycle',
      component: () => import('../views/basic/LifeCycle.vue'),
    },
    {
      path: '/response',
      name: 'Response',
      component: () => import('../views/basic/Response.vue'),
    },
    {
      path: '/dataWatch',
      name: 'DataWatch',
      component: () => import('../views/basic/DataWatch.vue'),
    },
    {
      path: '/cusDirective',
      name: 'CusDirective',
      component: () => import('../views/basic/CusDirective.vue'),
    },
    {
      path: '/slot',
      name: 'Slot',
      component: () => import('../views/basic/Slot.vue'),
    },
  ],
});

export default router;
