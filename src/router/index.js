import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    const windowWidth = window.innerWidth;
    let navHeight = 0;

    if (!to && !to.hash) {
      return { top: 0, left: 0 };
    }

    if (windowWidth <= 540) {
      navHeight = 66;
    } else if (windowWidth <= 1140) {
      navHeight = 94;
    } else if (windowWidth >= 1141) {
      navHeight = 99;
    }

    return {
      el: to.hash,
      top: navHeight,
    };
  },
});

export default router;
