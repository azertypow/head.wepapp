<template>
  <div class="v-home">
    <page-view>
      <div
          v-if="projects"
          v-for="project of projects.data"
      >
        {{project.title}}
      </div>
    </page-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ResourcesItem from "@/components/ResourcesItem.vue"
import {IProjects, storeKey} from "@/store"
import PageView from "@/components/PageView.vue"
import {useStore} from "vuex"

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

  mounted() {
  }

});
</script>

<style lang="scss" scoped>
.v-home {

}
</style>
