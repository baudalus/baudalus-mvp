<template>
  <MenuBar/>
  <main>
    <div>
      <h1>Task-View</h1>
    </div>
    <div class="filter-holder mb-1rem">
      <div class="filter mr-2rem">
        <input type="checkbox" id="ckbx_erledigt" v-model="ckbx_erledigt" @change="filterTasks">
        <label for="ckbx_erledigt">Done</label>
      </div>
      <div class="filter mr-2rem">
        <input type="checkbox" id="ckbx_warnung" v-model="ckbx_warnung" @change="filterTasks">
        <label for="ckbx_warnung">Warning</label>
      </div>
      <div class="filter mr-2rem">
        <input type="checkbox" id="ckbx_problem" v-model="ckbx_problem" @change="filterTasks">
        <label for="ckbx_problem">Problem</label>
      </div>
      <div class="filter">
        <input type="checkbox" id="ckbx_no_status" v-model="ckbx_no_status" @change="filterTasks">
        <label for="ckbx_no_status">No Status</label>
      </div>
    </div>
    <div class="mb-2rem">
      <InputText v-model="query" placeholder="Search for task" @input="filterTasks"/>
    </div>
    <div class="table-holder">

      <table>
        <tr>
          <th>Status</th>
          <th>Name</th>
          <th>Company</th>
          <th>Duration</th>
          <th>Start</th>
          <th>End</th>
          <th>Files</th>
        </tr>
        <tr
            v-for="(task, idx) in filtered_tasks"
            :key="`task_${idx}`"
        >
          <td class="status none" v-if="task.status === 'NONE'"/>
          <td class="status done" v-if="task.status === 'DONE'">
            <VueFeather type="check"/>
          </td>
          <td class="status warning" v-if="task.status === 'WARNING'">
            <VueFeather type="alert-triangle"/>
          </td>
          <td class="status problem" v-if="task.status === 'PROBLEM'">
            <VueFeather type="x"/>
          </td>
          <td>{{ task.name }}</td>
          <td>{{ task.company }}</td>
          <td>{{ task.duration }}</td>
          <td>01. Oct</td>
          <td>12. Oct</td>
          <td>
            <img
                class="preview"
                src="@/assets/projects/csm_Welcome-Forum_Schueco_01_9adb6ba882.jpeg"
                alt="preview"
                v-if="task.status !== 'NONE' && Math.random() > .95">
            <img
                class="preview"
                src="@/assets/projects/csm_parkingservices_referenz_northgate_4c3b2565da.jpeg"
                alt="preview"
                v-if="task.status !== 'NONE' && Math.random() > .85">
            <img
                class="preview"
                src="@/assets/projects/csm_parkhaus_MK8_gateway_gardens_27_886d255e7d.jpg"
                alt="preview"
                v-if="task.status !== 'NONE' && Math.random() > .75">
            <img
                class="preview"
                src="@/assets/projects/csm_facilityservices_ref_dsvlogistik-krefeld_68310724bd.jpeg"
                alt="preview"
                v-if="task.status !== 'NONE' && Math.random() > .7">
          </td>
        </tr>
      </table>
    </div>
  </main>
</template>

<script lang="ts">
import {VueFlow} from '@braks/vue-flow'

import {defineComponent} from "vue";
import ButtonPrimary from "@/components/ButtonPrimary.vue";
import MenuBar from "@/components/MenuBar.vue";
import InputText from "@/components/InputText.vue";
import {TaskHolder} from "@/typescript/taskholder";
import type {Task} from "@/typescript/taskholder";

export default defineComponent({
  components: {InputText, MenuBar, ButtonPrimary, VueFlow},
  data() {
    return {
      query: "",
      ckbx_erledigt: true,
      ckbx_warnung: true,
      ckbx_problem: true,
      ckbx_no_status: true,
      tasks: [] as Task[],
      filtered_tasks: [] as Task[]
    }
  },
  mounted() {
    this.tasks = this.filtered_tasks = this.getTasks()
  },
  methods: {
    filterTasks() {
      this.filtered_tasks = this.tasks.filter(t =>
          (t.name.toLowerCase().includes(this.query.toLowerCase()) || t.company.toLowerCase().includes(this.query.toLowerCase())) &&
          (t.status === "NONE" && this.ckbx_no_status
              || t.status === "DONE" && this.ckbx_erledigt
              || t.status === "WARNING" && this.ckbx_warnung
              || t.status === "PROBLEM" && this.ckbx_problem)
      )
    },
    getTasks(): Task[] {
      return TaskHolder.getUsedTasks() as Task[]
    }
  }
})
</script>

<style scoped>
main {
  width: 1024px;
  max-width: calc(100% - 6rem);
  margin-left: auto;
  margin-right: auto;
  padding-top: 3rem;
  padding-bottom: 3rem;
  transform: translateX(3rem);
}

main div.filter-holder {
  text-align: right;
}

main div.filter-holder div.filter {
  display: inline-block;
}

main div.filter-holder div.filter input[type=checkbox] {
  width: 1rem;
  height: 1rem;
  margin-right: .5rem;
  filter: invert(100%) hue-rotate(10deg) brightness(1.7);
  outline: none;
  border: none;
}

table img.preview {
  height: 2rem;
  margin-right: .4rem;
}

.table-holder {
  width: 100%;
  overflow: auto;
}

@media only screen and (max-device-width: 480px) {
  main {
    margin-top: 5rem;
    width: 100%;
    max-width: 100%;
    transform: none;
    padding: 2rem;
  }
}
</style>