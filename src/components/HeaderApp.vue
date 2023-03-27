<template>
  <header class="v-header-app m-g-container">

    <div class="m-g-coll-2-12">
      <router-link
          to="/"
          class="link--no_style"
      >
        {{title}}
      </router-link>
    </div>

    <div class="m-g-coll-4-12 v-header-app__project-title">
      <template
          v-if="store.state.projectContent"
      >{{$route.name}}/{{store.state.projectContent.project_title.value}}</template>
    </div>

    <div class="m-g-coll-6-12">
      <navigation></navigation>
    </div>

  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navigation from "./Navigation.vue"
import {useStore} from "vuex"
import {storeKey} from "@/store"

export default defineComponent({
  name: 'HeaderApp',
  components: {
    Navigation
  },

  data() {
    return {
      store: useStore(storeKey)
    }
  },

  computed: {
    title(): string {
      return this.store.state.site?.title || ""
    }
  }

});
</script>

<style lang="scss" scoped>
@import "../style/params";

.v-header-app {
  user-select: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  background: var( --site-background-color );
  z-index: 1000000;
  box-shadow: 0 10px 10px 5px rgba( var(--site-color--main--rgb-value), .1);
  height: 4rem;
  align-items: center;
  border-bottom: solid 1px currentColor;
}

.v-header-app__project-title {
  white-space: nowrap;
  overflow: hidden;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    display: block;
    height: 100%;
    width: 3em;
    background: linear-gradient(to left, var(--site-background-color), rgba(var(--site-background-color--rgb-value), 0) 100%);
    right: 0;
    top: 0;
    z-index: 10;
  }
}
</style>
