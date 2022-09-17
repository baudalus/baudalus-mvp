<template>
  <MenuBar/>
</template>

<script lang="ts">
import {VueFlow} from '@braks/vue-flow'

import {defineComponent} from "vue";
import ButtonPrimary from "@/components/ButtonPrimary.vue";
import MenuBar from "@/components/MenuBar.vue";

export default defineComponent({
  components: {MenuBar, ButtonPrimary, VueFlow},
  data() {
  }
})
</script>

<style scoped>

</style>