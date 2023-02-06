import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    redirect: '/students'
  },
  {
    path: '/students',
    name: 'For Students',
    component: () => import('../views/Students.vue'),
  },
  {
    path: '/project/:apiProjectUriMinified',
    name: 'Project',
    component: () => import('../views/Project.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
