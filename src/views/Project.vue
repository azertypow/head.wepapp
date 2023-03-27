<template>
  <section class="v-project-vue">
    <template
        v-if="store.state.projectContent"
    >
      <header>
        <img
            class="v-project-vue__img-cover"
            v-for="image of store.state.projectContent.images_covers"
            :alt="`Image cover of ${image.safeName}`"
            :src="image.url"
        >
      </header>
      <page-view>
        <h1>{{store.state.projectContent.project_title.value}}</h1>

        <div
            class="v-project-vue__v-html"
            v-html="store.state.projectContent.description_EN.value"
        ></div>

        <div
            class="v-project-vue__gallery"
        >
          <img
              v-for="image of store.state.projectContent.images_gallery"
              :src="image.url"
              :alt="image.safeName"
          />
        </div>

        <div
            class="v-project-vue__embed"
        >
          <div
              v-for="embed of store.state.projectContent.embed_items_gallery"
              v-html="embed.content.code"
          ></div>
        </div>

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
    },
  },

  methods: {
    async getProjectContent() {
      if( this.projectData?.apiUrl === undefined ) return
      useStore(storeKey).state.projectContent = await (await window.fetch(this.projectData.apiUrl)).json()
    },
  },
})
</script>

<style
    lang="scss">
.project-vue {
}

.v-project-vue__img-cover {
  width: 100%;
  display: block;
  height: auto;
  max-height: 80vh;
  object-fit: cover;
  object-position: center;
}

.v-project-vue__v-html {
  max-width: 42em;
  font-family: sans-serif;
}

.v-project-vue__gallery {
  height: 75vh;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: scroll;
  scroll-snap-type: x mandatory;
  box-sizing: content-box;
  padding-right: 75%;

  img {
    scroll-snap-align: start;
    display: block;
    height: 100%;
    width: auto;
    margin-right: 2rem;
  }
}

.v-project-vue__embed {
  //max-width: 42em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  flex-wrap: wrap;

  > div {
    display: block;
    margin-top: 2rem;
    box-sizing: border-box;
    padding-right: 2rem;
    width: calc(100% / 3);

    > iframe {
      display: block;
      width: 100%;
      height: auto;
    }
  }
}
</style>
