<template>
  <MenuBar/>
  <ButtonPrimary class="add-task" @click="displayPopUp">Add task</ButtonPrimary>
  <div :class="'status-deadline' + (deadline !== '29th May 2025' ? ' pulse' : '')">
    <span class="info">Deadline: {{deadline}}</span>
    <span :class="'icon ' + deadlineIcon">
      <VueFeather :type="deadlineIcon"/>
    </span>
  </div>
  <VueFlow
      v-model="elements"
      class="flow-holder"
      :default-zoom=".2"
      :min-zoom="0.1"
      :max-zoom="3">
    <MiniMap/>
  </VueFlow>
  <InputSelect :options="sites" class="site-select"></InputSelect>
  <div class="pop-up-background" v-if="showPopUp" @click="hidePopUp">
    <div class="pop-up" @click.stop>
      <h2 class="mt-0rem mb-3rem">Create new task</h2>
      <div class="mb-1rem">
        <InputText v-model="newTask.name" placeholder="Name of the task"/>
      </div>
      <div v-if="newTask.name !== ''" class="mb-1rem">
        <InputText v-model="newTask.company" placeholder="Company"/>
      </div>
      <div v-if="newTask.name !== '' && newTask.company !== ''" class="mb-3rem">
        <InputSelect :options="durationOptions"/>
      </div>
      <ButtonPrimary style="float: right" @click="chooseDependencies"
                     v-if="newTask.name !== '' && newTask.company !== ''">Next
      </ButtonPrimary>
    </div>
  </div>
</template>

<script lang="ts">
import {VueFlow, MiniMap, Position} from '@braks/vue-flow'

import {defineComponent} from "vue";
import ButtonPrimary from "@/components/ButtonPrimary.vue";
import MenuBar from "@/components/MenuBar.vue";
import InputSelect from "@/components/InputSelect.vue";
import {TaskHolder} from "@/typescript/taskholder";
import InputText from "@/components/InputText.vue";

export default defineComponent({
  components: {InputText, InputSelect, MenuBar, ButtonPrimary, VueFlow, MiniMap},
  data() {
    return {
      showPopUp: false,
      sites: [
        {title: "Founders Foundation", value: 1},
        {title: "DSV Logistik", value: 1},
        {title: "Gateway Gardens", value: 1},
        {title: "Northgate", value: 1},
        {title: "Sch??co Welcome Forum", value: 1},
        {title: "Tesla Giga Factory", value: 1}
      ],
      elements: [] as any[],
      newTask: {
        name: "",
        company: "",
        duration: "",
      },
      durationOptions: [
        {title: "1 day", value: 1},
        {title: "2 days", value: 2},
        {title: "3 days", value: 3},
        {title: "4 days", value: 4},
        {title: "5 days", value: 5},
        {title: "6 days", value: 6},
        {title: "7 days", value: 7},
      ],
      deadline: "29th May 2025",
      deadlineIcon: "check"
    }
  },
  mounted() {
    this.elements = this.buildElements()

    setTimeout(() => {
      const box = document.querySelector('div.vue-flow__node[data-id="28"]') as HTMLElement
      const deadlines = [
          "29th May 2025",
          "30th May 2025",
          "31st May 2025",
          "1st June 2025",
          "7th June 2025",
          "14th June 2025",
          "21th June 2025",
          "28th June 2025",
          "1st July 2025",
          "7th July 2025",
          "8th July 2025",
      ]
      const startPosition = {x: 0, y: 0}
      box?.addEventListener("click", (e) => {

        const frameRate = 10
        let deadlineIndex = 0
        const updateBoxWidthInterval = setInterval(() => {
          if(Math.random() > 0.7)
            box.style.width = (400 + (100/frameRate) * deadlineIndex) +"px"

          if(deadlineIndex >= 7*2*frameRate)
            this.deadlineIcon = "x"

          if(deadlineIndex >= 8*2*frameRate)
            clearInterval(updateBoxWidthInterval)

          deadlineIndex ++
        }, 250 / frameRate)
        const updateDeadlineinterval = setInterval(() => {

          this.deadline = deadlines[Math.floor(deadlineIndex/(2*frameRate))]

          if(deadlineIndex >= 10*2*frameRate)
            clearInterval(updateDeadlineinterval)
        }, 500)
      })
    }, 500)
  },
  methods: {
    buildElements() {
      let elements = []
      let tasks = TaskHolder.getTasks()
      let connections = TaskHolder.getConnections()

      // get the starting positin
      const viewMultiplier = 5
      const startPosition = {
        x: Math.floor(window.innerWidth * 0.15) * viewMultiplier,
        y: Math.floor(window.innerHeight / 2) * viewMultiplier
      }

      // define the margins between the elements of a depth level
      const multiplier = 3
      const margins = [0, 300 * multiplier, 100 * multiplier, 50 * multiplier, 25 * multiplier, 12 * multiplier, 6 * multiplier, 0]
      const offsetRight = 300 * 2.5

      // positions of all elements by id
      let positions: { [key: string]: { x: number, y: number } } = {}

      // add first element
      elements.push({
        id: '1',
        type: 'input',
        label: tasks["1"].name,
        class: 'status-DONE',
        position: startPosition,
        sourcePosition: Position.Right
      })
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
          let lastConnectedId: string | number | undefined = nodeId
          while (lastConnectedId !== undefined) {
            const connectedBy = TaskHolder.getNodeConnectedBy(Number(lastConnectedId))
            lastConnectedId = connectedBy.length === 0 ? undefined : connectedBy[0]
            level += 1
          }

          // calculate height of all nodes of this level
          const allNodesHeight = margins[level] * (nodes.length - 1)

          // create node if element not exists already
          if (!(nodeId in positions)) {

            // generate random offset
            const randomOffset = Math.random() * 200 - 100
            // generate new position
            let newPosition = {
              x: positions[id].x + offsetRight + randomOffset,
              y: positions[id].y - allNodesHeight / 2 + margins[level] * i - 10
            }

            // if the node is referenced by more than one nodes only create if all referecing nodes are created
            // and set position to middle of those
            let connectedBy = TaskHolder.getNodeConnectedBy(nodeId)
            let connectdByCreated = connectedBy.filter(c => c in positions)
            if (connectedBy.length !== connectdByCreated.length)
              continue

            if (connectedBy.length > 1) {
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
              class: 'status-' + tasks[nodeId].status,
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
    },
    displayPopUp() {
      this.showPopUp = true
    },
    hidePopUp() {
      this.showPopUp = false
    },
    chooseDependencies() {
      this.hidePopUp()
      /*
      TaskHolder.addTask({
        area: "",
        name: this.newTask.name,
        company: this.newTask.company,
        start: "",
        end: "",
        status: "NONE",
        duration: "4 days",
      })
      //TaskHolder.addConnection(28, [125])
      this.elements = this.buildElements()
       */
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
  width: 250px;
  position: fixed !important;
  bottom: 3rem;
  right: 3rem;
  z-index: 10;
}

.site-select select {
  padding: .95rem 5rem .95rem 2rem;
}

.vue-flow__minimap {
  display: none;
  position: fixed;
  bottom: 3rem;
  left: 3rem;
}

.pop-up-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 100;
}

.pop-up-background .pop-up {
  position: absolute;
  top: 50vh;
  left: 50%;
  width: 500px;
  background: #ffffff;
  transform: translate(-50%, -50%);
  padding: 3rem 3rem 4rem 3rem;
}

.status-deadline {
  position: fixed;
  top: 2rem;
  left: 50vw;
  transform: translateX(-50%);
  background: #efefef;
  padding: .6rem 4rem .6rem 2rem;
  z-index: 10;
  overflow: hidden;
  border: 3px solid #000000;
}
.status-deadline.pulse{
  animation: pulse-black 1s infinite;
}

.status-deadline span.icon {
  position: absolute;
  right: 0;
  top: 0;
  background: #A8DCD1;
  padding: .6rem;
}
.status-deadline span.icon.x{
  background: #e7573b;
  color: #ffffff;
}

@keyframes pulse-black {
  0% {
    transform: translateX(-50%) scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }

  70% {
    transform: translateX(-50%) scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: translateX(-50%) scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}

@media only screen and (max-device-width: 480px) {
  .site-select {
    display: none;
  }

  .status-deadline{
    top: unset;
    bottom: 0;
    left: 0;
    width: 100%;
    transform: none;
    text-align: center;
  }

  button.add-task {
    top: unset;
    bottom: 2.5rem;
    left: 0;
    width: 100%;
  }

  .pop-up-background .pop-up {
    width: calc(100% - 3rem);
  }
}
</style>