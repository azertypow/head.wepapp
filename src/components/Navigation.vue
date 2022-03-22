<template>
  <nav class="v-navigation">
    <template
          v-for="route of this.$router.getRoutes()"
    >
      <router-link
          :to="route.path"
          v-if="this.$route.name !== route.name"
      >{{route.name}}</router-link>
    </template>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navigation',
  components: {
  },
});
</script>

<style lang="scss" scoped>
.v-navigation {

}
</style>
