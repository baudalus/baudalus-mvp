import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
    },
    {
      path: '/loading',
      name: 'loading',
      component: () => import('../views/Loading.vue')
    },
    {
      path: '/app',
      name: 'app',
      component: () => import('../views/App.vue')
    },
    {
      path: '/docs',
      name: 'docs',
      component: () => import('../views/Docs.vue')
    }
  ]
})

export default router
