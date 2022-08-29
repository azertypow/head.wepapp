<template>
  <section class="v-project-vue">
    <template
        v-if="projectData"
    >
      <page-view>
        hello {{projectData.title}}
      </page-view>
    </template>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {IProject, storeKey} from "@/store"
import {apiBaseUrl, apiProjectsPathUri} from "@/main"
import {useStore} from "vuex"
import PageView from "@/components/PageView.vue"

export default defineComponent({
  components: {PageView},
  data() {
    return {
      store: useStore(storeKey),
    }
  },

  computed: {
    projectData(): IProject | null {
      const apiProjectUri = apiProjectsPathUri + this.$route.params.apiProjectUriMinified

      return this.store.state.projectsList?.find( value => {
        return value.apiUri === apiProjectUri
      }) || null
    }
  },
})
</script>

<style scoped lang="scss">
.project-vue {
}
</style>
