import {createStore, useStore as baseUseStore, Store} from 'vuex'
import {InjectionKey} from "vue"

export default createStore<IState>({

  state: {
    students: null,
    site: null,
    projectsList: null,
  },

  mutations: {
    updateStudents(state, studentsData: IStudents) {
      state.students = studentsData
    },

    updateSite(state, siteData: ISite) {
      state.site = siteData
    },

    updateProjectsList(state, projectsListData: IProjects) {
      state.projectsList = projectsListData
    }
  },
  actions: {
  },
  modules: {
  }
})

export const storeKey: InjectionKey<Store<IState>> = Symbol()

export interface IState {
  site: ISite | null
  students: IStudents | null
  projectsList: IProjects | null
}

export interface ISite {
  title: string,
  description_en: string,
  description_fr: string,
}

export interface IStudents {
  "description_en": string
  "description_fr": string
  items: IResourcesItem[]
  title: string
}

export interface IResourcesItem {
  "description en": string
  "description fr": string
  images: IImageData[]
  link: string
  title: string
}

export interface IImageData {
  [key: string]: {
    url: string,
    safeName: string,
  }
}

export interface IProjects {
  data: {
    [key: string]: {
      title: string,
      cover: {
        [key: string]: {
          url: string,
          safeName: string
        }
      },
      url: string
    },
  }[]
}
