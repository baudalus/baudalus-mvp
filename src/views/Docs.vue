<template>
  <MenuBar/>
  <main>
    <div>
      <h1>Task-View</h1>
    </div>
    <div class="filter-holder mb-1rem">
      <div class="filter mr-2rem">
        <input type="checkbox" id="ckbx_erledigt" v-model="ckbx_erledigt">
        <label for="ckbx_erledigt">Done</label>
      </div>
      <div class="filter mr-2rem">
        <input type="checkbox" id="ckbx_warnung" v-model="ckbx_warnung">
        <label for="ckbx_warnung">Warning</label>
      </div>
      <div class="filter">
        <input type="checkbox" id="ckbx_problem" v-model="ckbx_problem">
        <label for="ckbx_problem">Problem</label>
      </div>
    </div>
    <div class="mb-2rem">
      <InputText v-model="query" placeholder="Search for task"/>
    </div>
    <table>
      <tr>
        <th>Status</th>
        <th>Name</th>
        <th>Company</th>
        <th>Location</th>
        <th>Duration</th>
        <th>Start</th>
        <th>End</th>
        <th>Files</th>
      </tr>
      <tr
          v-for="(task, idx) in filterTasks()"
          :key="`task_${idx}`"
      >
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
        <td>{{ task.location }}</td>
        <td>{{ task.duration }}d</td>
        <td>01. Oct</td>
        <td>12. Oct</td>
        <td>
          <img class="preview" src="@/assets/projects/csm_facilityservices_ref_dsvlogistik-krefeld_68310724bd.jpeg" alt="preview">
          <img class="preview" src="@/assets/projects/csm_parkhaus_MK8_gateway_gardens_27_886d255e7d.jpg" alt="preview">
        </td>
      </tr>
    </table>
  </main>
</template>

<script lang="ts">
import {VueFlow} from '@braks/vue-flow'

import {defineComponent} from "vue";
import ButtonPrimary from "@/components/ButtonPrimary.vue";
import MenuBar from "@/components/MenuBar.vue";
import InputText from "@/components/InputText.vue";

export default defineComponent({
  components: {InputText, MenuBar, ButtonPrimary, VueFlow},
  data() {
    return {
      query: "",
      ckbx_erledigt: true,
      ckbx_warnung: true,
      ckbx_problem: true,
      tasks: [
        {name: "Task 1", status: "DONE", company: "Maler GmbH", location: "Walls left side", duration: 7},
        {name: "Task 2", status: "WARNING", company: "Boundix GbR", location: "Roof top", duration: 5},
        {name: "Task 3", status: "PROBLEM", company: "Ill UG", location: "2nd floor", duration: 14},
      ]
    }
  },
  methods: {
    filterTasks() {
      return this.tasks.filter(t =>
          (t.name.toLowerCase().includes(this.query.toLowerCase()) || t.company.toLowerCase().includes(this.query.toLowerCase())) &&
          (t.status === "DONE" && this.ckbx_erledigt
              || t.status === "WARNING" && this.ckbx_warnung
              || t.status === "PROBLEM" && this.ckbx_problem)
      )
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
</style>