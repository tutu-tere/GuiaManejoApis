import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/users',
      name: 'user',
      component: () => import('../views/UsersView.vue')
    },
    {
      path: '/pikachu',
      name: 'pikachu',
      component: () => import('../views/PicachuView.vue')
    },
    {
      path: '/dolar',
      name: 'dolar',
      component: () => import('../views/DolarView.vue')
    },
    {
      path: '/clima',
      name: 'clima',
      component: () => import('../views/ClimaView.vue')
    }
  ]
})

export default router
