<template>
  <div class="v-home">

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
  },

  mounted() {
    fetch("https://mastermediadesign.ch/api/pages/projects/", {
      method: "GET",
      // mode:"no-cors",
      headers: {
        'Authorization': 'Basic ' + btoa('public@public.com:publickey'),
      },
    })
        .then(response => response.json())
        .then(response => {
          const page = response.data;
          console.log( page )
        })
        .catch(error => {
          // something went wrong
        });
  }
});
</script>

<style lang="scss" scoped>
.v-home {

}
</style>
