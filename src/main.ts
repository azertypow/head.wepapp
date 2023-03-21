import "./style/_main.scss"

import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store, {IProjects, ISite, storeKey} from './store'

createApp(App).use(store, storeKey).use(router).mount('#app')

export const apiBaseUrl = "https://api.mastermediadesign.ch"
// export const apiBaseUrl = "http://localhost:8000"

export const apiProjectsPathUri = 'projects/'

fetch(`${apiBaseUrl}/students`, {
  method: "GET",
})
  .then(response => response.json())
  .then(response => {

    store.commit("updateStudents", response)

  })
  .catch(error => {
    console.error(error)
  });

fetch(`${apiBaseUrl}/`, {
  method: "GET",
})
  .then(response => response.json())
  .then(response => {

    const siteData: ISite = {
        title:          response.title || "",
        description_en: response.description_en || "",
        description_fr: response.description_fr || "",
    }

    store.commit("updateSite", siteData)

  })
  .catch(error => {
    console.error(error)
  });

fetch(`${apiBaseUrl}/projects`, {
  method: "GET",
})
  .then(response => response.json())
  .then(response => {
    store.commit("updateProjectsList", response)

  })
  .catch(error => {
    console.error(error)
  });
