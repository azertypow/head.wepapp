<template>
  <div class="v-home">
    <page-view>
      <div
          class="v-home__project"
          v-if="projects"
          v-for="project of projects"
          @click="openProject(project)"
      >
        <img
            v-for="coverData of project.cover"
            :src="coverData.url"
            alt=""
        >
        {{project.title}}
      </div>
    </page-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ResourcesItem from "@/components/ResourcesItem.vue"
import {IProjects, IProject, storeKey} from "@/store"
import PageView from "@/components/PageView.vue"
import {useStore} from "vuex"
import {apiProjectsPathUri} from "@/main"

export default defineComponent({
  name: 'Home',
  components: {
    PageView,
    ResourcesItem
  },

  data() {
    return {
      store: useStore(storeKey),
    }
  },

  computed: {
    projects(): IProjects | null {
      return this.store.state.projectsList
    }
  },

  methods: {
      openProject(project: IProject) {
        const projectApiUriMinified = project.apiUri.replace(apiProjectsPathUri, '')

        this.$router.push({
          name: 'Project',
          params: {
            apiProjectUriMinified: projectApiUriMinified
          }
        })
      },
  },

  mounted() {
  }

});
</script>

<style lang="scss" scoped>
.v-home {
  img {
    height: calc( var(--line-height) * 5 );
    display: inline-block;
    vertical-align: baseline;
  }
}

.v-home__project {
  cursor: pointer;
  user-select: none;
}
</style>
