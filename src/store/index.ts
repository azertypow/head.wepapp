import {createStore, useStore as baseUseStore, Store, useStore} from 'vuex'
import {InjectionKey} from "vue"
import {apiProjectsPathUri} from "@/main"
import router from "@/router"

export default createStore<IState>({

  state: {
    students: null,
    site: null,
    projectsList: null,
    projectOpenUri: null,
    projectContent: null,
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
  projectOpenUri: string | null
  projectContent: null | IProjectContent
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

export type IProjects = IProject[]

export interface IProject {
  title: {
    value: string,
  },
  cover: {
    url: string,
    safeName: string
  }[],
  apiUrl: string,
  apiUri: string,
  categories: string
}

export interface IProjectContent {
  project_title: {
    value: string
  },
  "images_covers": {
    [key: string]: {
      "url": string
      "safeName": string
    }
  },
  "description_EN": {
    "value": string
  },
  "description_FR": {
    "value": string
  },
  "students": {
    "value": string
  },
  "professors": {
    "value": string
  },
  "assistants": {
    "value": string
  }
  categories: string
  images_gallery: {
    [key: string]: {
      "url": string
      "safeName": string
    }
  }
  embed_items_gallery: {
    "content": {
      "code": string
      "language": string
    },
    "id": string
    "isHidden": string
    "type": string
  }[]
}
