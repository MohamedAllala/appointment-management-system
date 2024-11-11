import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/HomePage.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../pages/LoginPage.vue')
    }
]
})

export default router