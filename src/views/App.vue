<template>
  <MenuBar/>
  <ButtonPrimary class="add-task">Add task</ButtonPrimary>
  <VueFlow v-model="elements" class="flow-holder"/>
  <InputSelect :options="sites" class="site-select"></InputSelect>
</template>

<script lang="ts">
import {VueFlow} from '@braks/vue-flow'

import {defineComponent} from "vue";
import ButtonPrimary from "@/components/ButtonPrimary.vue";
import MenuBar from "@/components/MenuBar.vue";
import InputSelect from "@/components/InputSelect.vue";

export default defineComponent({
  components: {InputSelect, MenuBar, ButtonPrimary, VueFlow},
  data() {
    return {
      sites: [
        {title: "Founders Foundation Building", value: 1}
      ],
      elements: [
        // Nodes
        // An input node, specified by using `type: 'input'`
        {id: '1', type: 'input', label: 'Node 1', position: {x: 250, y: 5}},

        // Default nodes, you can omit `type: 'default'`
        {id: '2', label: 'Node 2', position: {x: 100, y: 100},},
        {id: '3', label: 'Node 3', position: {x: 400, y: 100}},

        // An output node, specified by using `type: 'output'`
        {id: '4', type: 'output', label: 'Node 4', position: {x: 400, y: 200}},

        // Edges
        // Most basic edge, only consists of an id, source-id and target-id
        {id: 'e1-3', source: '1', target: '3'},

        // An animated edge
        {id: 'e1-2', source: '1', target: '2', animated: true},
      ]
    }
  }
})
</script>

<style scoped>
.flow-holder {
  width: 100%;
  height: 100vh;
}

button.add-task {
  position: fixed;
  top: 2rem;
  right: 3rem;
  z-index: 10;
}

.site-select {
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  z-index: 10;
}
</style>