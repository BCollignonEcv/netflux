import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/series',
      name: 'serie',
      component: () => import('../views/Series.vue')
    },
    {
      path: '/films',
      name: 'films',
      component: () => import('../views/Films.vue')
    },
    {
      path: '/my-list',
      name: 'myList',
      component: () => import('../views/MyList.vue')
    },
    {
      path: '/my-account',
      name: 'myAccount',
      component: () => import('../views/MyAccount.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
