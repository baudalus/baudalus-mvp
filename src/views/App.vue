<template>
  <MenuBar/>
  <ButtonPrimary class="add-task">Add task</ButtonPrimary>
  <VueFlow
      v-model="elements"
      class="flow-holder"
      :default-zoom="1"
      :min-zoom="0.1"
      :max-zoom="3">
    <MiniMap/>
  </VueFlow>
  <InputSelect :options="sites" class="site-select"></InputSelect>
</template>

<script lang="ts">
import {VueFlow, MiniMap, Position} from '@braks/vue-flow'

import {defineComponent} from "vue";
import ButtonPrimary from "@/components/ButtonPrimary.vue";
import MenuBar from "@/components/MenuBar.vue";
import InputSelect from "@/components/InputSelect.vue";
import {TaskHolder} from "@/typescript/taskholder";

export default defineComponent({
  components: {InputSelect, MenuBar, ButtonPrimary, VueFlow, MiniMap},
  data() {
    return {
      sites: [
        {title: "Founders Foundation", value: 1},
        {title: "DSV Logistik", value: 1},
        {title: "Gateway Gardens", value: 1},
        {title: "Northgate", value: 1},
        {title: "Schüco Welcome Forum", value: 1},
        {title: "Tesla Giga Factory", value: 1}
      ],
      elements: [] as Object[],
      elementsOld: [
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
  },
  mounted() {
    this.elements = this.buildElements()
  },
  methods: {
    buildElements() {
      let elements = []
      let tasks = TaskHolder.getTasks()
      let connections = TaskHolder.getConnections()

      // get the starting positin
      const startPosition = {x: Math.floor(window.innerWidth * 0.15), y: Math.floor(window.innerHeight / 2)}

      // define the margins between the elements of a depth level
      const multiplier = 3
      const margins = [0, 300 * multiplier, 100 * multiplier, 50 * multiplier, 25 * multiplier, 12*multiplier, 6*multiplier, 0]
      const offsetRight = 300 * 1.5

      // positions of all elements by id
      let positions: { [key: string]: { x: number, y: number } } = {}

      // add first element
      elements.push({id: '1', type: 'input', label: tasks["1"].name, position: startPosition, sourcePosition: Position.Right})
      positions["1"] = startPosition

      for (const id of Object.keys(connections)) {
        // get all connected nodes
        const nodes = connections[id]

        // iterate over all nodes
        for (let i = 0; i < nodes.length; i++) {
          // get connected node id
          const nodeId = nodes[i]

          // calculate level in tree
          let level = -1
          let lastConnectedId: string|number|undefined = nodeId
          while(lastConnectedId !== undefined) {
            const connectedBy = TaskHolder.getNodeConnectedBy(Number(lastConnectedId))
            lastConnectedId = connectedBy.length === 0 ? undefined : connectedBy[0]
            level += 1
          }

          // calculate height of all nodes of this level
          const allNodesHeight = margins[level] * (nodes.length - 1)

          // create node if element not exists already
          if (!(nodeId in positions)) {

            // generate new position
            let newPosition = {
              x: positions[id].x + offsetRight,
              y: positions[id].y - allNodesHeight / 2 + margins[level] * i - 10
            }

            // if the node is referenced by more than one nodes only create if all referecing nodes are created
            // and set position to middle of those
            let connectedBy = TaskHolder.getNodeConnectedBy(nodeId)
            let connectdByCreated = connectedBy.filter(c => c in positions)
            if (connectedBy.length !== connectdByCreated.length)
              continue

            if (connectedBy.length > 1){
              const yPositions = connectedBy.map(c => positions[c].y)
              newPosition.y = yPositions.reduce((pv, cv) => pv + cv, 0) / connectedBy.length;

              // create connections to objects that are created already
              connectedBy.forEach(c => {
                const newConnection = {id: `e_${c}_${nodeId}`, source: c, target: nodeId.toString()}
                elements.push(newConnection)
              })
            }

            // create new node
            const newNode = {
              id: nodeId,
              label: tasks[nodeId].name,
              position: newPosition,
              targetPosition: Position.Left,
              sourcePosition: Position.Right,
            }
            elements.push(newNode)
            positions[nodeId] = newPosition
          }

          // create connection
          const newConnection = {id: `e_${id}_${nodeId}`, source: id.toString(), target: nodeId.toString()}
          elements.push(newConnection)
        }

      }

      console.log(elements)

      return elements
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

.vue-flow__minimap {
  display: none;
  position: fixed;
  bottom: 3rem;
  left: 3rem;
}
</style>