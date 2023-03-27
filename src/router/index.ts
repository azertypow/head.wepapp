import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import {useStore} from "vuex"
import store, {IProject, storeKey} from "@/store"
import {apiProjectsPathUri} from "@/main"

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

router.beforeEach((to, from, next) => {
  store.state.projectContent = null
  next()
})

router.afterEach(async to => {

  const projectData: IProject | null = (() => {
    const apiProjectUri = apiProjectsPathUri + router.currentRoute.value.params.apiProjectUriMinified

    return store.state.projectsList?.find( value => {
      return value.apiUri === apiProjectUri
    }) || null
  })()


  if( projectData?.apiUrl === undefined ) return
  store.state.projectContent = await (await window.fetch(projectData.apiUrl)).json()
})

export default router
