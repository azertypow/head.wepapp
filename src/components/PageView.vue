<template>
  <section class="v-page-view-vue m-g-container">

    <aside class="v-page-view-vue__left m-g-coll-2-12">
      <slot name="aside" ></slot>
    </aside>

    <main class="v-page-view-vue__main m-g-coll-10-12">
      <slot></slot>
    </main>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
})
</script>

<style scoped lang="scss">
.page-view-vue {
}
</style>
