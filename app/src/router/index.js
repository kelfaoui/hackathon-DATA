import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataView from '../views/DataView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: (route) => ({ foo: route.query.foo }),
    },
    {
      path: '/data',
      name: 'data',
      component: DataView
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutView
    }
  ]
})

export default router
