<template>
  <div class="v-students">

    <page-view>
      <div class="v-students__box">
        <div
            class="v-students__box__grid m-with-gutter--column m-with-gutter--row"
            v-if="studentsItems"
            v-for="item of studentsItems"
        >
          <resources-item
              class="v-students__box__grid__item"
              :data="item"
          />
        </div>
      </div>
    </page-view>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ResourcesItem from "@/components/ResourcesItem.vue"
import {IResourcesItem, storeKey} from "@/store"
import PageView from "@/components/PageView.vue"
import {useStore} from "vuex"

export default defineComponent({
  name: 'Students',


  data() {
    return {
      store: useStore(storeKey)
    }
  },

  mounted() {

    console.log( "students: ", this.store.state.students )

  },

  computed: {
    studentsItems(): IResourcesItem[] | null {
      return this.store.state.students?.items || null
    }
  },

  components: {
    PageView,
    ResourcesItem
  },
});
</script>

<style lang="scss" scoped >
.v-students {

}

.v-students__box {
  display: flex;
  flex-wrap: wrap;
  position: relative;
}

.v-students__box__grid {
  width: 100%;
  box-sizing: border-box;
  max-width: 50rem;
}

.v-students__box__grid__item {
  height: 100%;
}

</style>
