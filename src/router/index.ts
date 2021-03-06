import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/students',
    name: 'For Students',
    component: () => import('../views/Students.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
