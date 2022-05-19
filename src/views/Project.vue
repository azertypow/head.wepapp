<template>
  <section class="v-project-vue">

  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    book: {
      //   // provide more specific type to `Object`
      //   type: Object as PropType<Book>,
      //   required: true
      // },
      // // can also annotate functions
      // callback: Function as PropType<(id: number) => void>
    },

    mounted() {
    },
  },
})
</script>

<style scoped lang="scss">
.project-vue {
}
</style>
