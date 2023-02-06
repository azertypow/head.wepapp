<template>
  <section class="v-project-vue">
    <template
        v-if="projectData"
    >
      <page-view>
        <template
            v-if="this.projectContent"
        >
          <h1>{{projectContent.project_title}}</h1>

          <div
              v-html="projectContent.description_EN.value"
          ></div>

        </template>
      </page-view>
    </template>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {IProject, IProjectContent, storeKey} from "@/store"
import {apiBaseUrl, apiProjectsPathUri} from "@/main"
import {useStore} from "vuex"
import PageView from "@/components/PageView.vue"

export default defineComponent({
  components: {PageView},

  mounted() {
    this.getProjectContent()
  },

  data() {
    return {
      store: useStore(storeKey),
      projectContent: null as null | IProjectContent,
    }
  },

  computed: {
    projectData(): IProject | null {
      const apiProjectUri = apiProjectsPathUri + this.$route.params.apiProjectUriMinified

      return this.store.state.projectsList?.find( value => {
        return value.apiUri === apiProjectUri
      }) || null
    },
  },

  methods: {
    async getProjectContent() {
      if( this.projectData?.apiUrl === undefined ) return
      this.projectContent = await (await window.fetch(this.projectData.apiUrl)).json()
    },
  },
})
</script>

<style scoped lang="scss">
.project-vue {
}
</style>
