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
            class="v-home__project__cover"
            v-for="coverData of project.cover"
            :src="coverData.url"
            alt=""
        >
        <div>
          <div>
            {{project.title.value}}
          </div>
          <div class="v-home__project__tags">
            <button
                v-for="category of project.categories.split(',').map(value => {return value.trim()})"
            >{{category}}</button>
          </div>
        </div>
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
}

.v-home__project {
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  box-sizing: content-box;
  height: 8rem;
  padding-top: .5rem;
  padding-bottom: .5rem;
}
.v-home__project__cover {
  display: block;
  height: 100%;
  width: 12rem;
  object-fit: cover;
  box-sizing: content-box;
  padding-right: 1rem;
}

.v-home__project__tags {
  > * {
    margin-right: 1rem;
  }
}
</style>
