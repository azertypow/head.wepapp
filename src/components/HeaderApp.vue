<template>
  <header class="v-header-app m-g-container m-with-gutter--column m-with-gutter--row">

    <div class="m-g-coll-2-12">
      <router-link
          to="/"
          class="link--no_style"
      >
        {{title}}
      </router-link>
    </div>

    <div class="m-g-coll-4-12">
      {{$route.name}}
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  background: var( --site-background-color );
  z-index: 1000000;
  box-shadow: 0 10px 10px 5px rgba( var(--site-color--main--rgb-value), .1);
}
</style>
