<script setup lang="ts">
import InputText from "@/components/InputText.vue";
import ButtonPrimary from "@/components/ButtonPrimary.vue";
</script>

<template>
  <main>
    <div class="mb-3rem">
      <h1>Create New Site</h1>
    </div>

    <div class="details">
      <div class="mb-3rem">
        <div>
          <h2>What?</h2>
        </div>
        <div>
          <InputText v-model="name" placeholder="Enter the name"/>
        </div>
      </div>
      <div>
        <div>
          <h2>Where?</h2>
        </div>
        <div>
          <InputText v-model="place" placeholder="Enter the place"/>
        </div>
      </div>
    </div>

    <div>
      <h2>Choose template</h2>
    </div>
    <div class="item-holder">
      <div
          v-for="(template, idx) in templates"
          :key="`template_${idx}`"
          class="item"
          @click="$router.push('/loading')"
      >
        {{ template.name }}
        <VueFeather :type="template.icon"/>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  data() {
    return {
      name: "",
      place: "",
      templates: [
        {name: "Storage hall", icon: "arrow-right"},
        {name: "Parking garage", icon: "arrow-right"},
        {name: "School building", icon: "arrow-right"},
        {name: "Office building", icon: "arrow-right"},
        {name: "Residential building", icon: "arrow-right"},
        {name: "Facilty services", icon: "arrow-right"},
        {name: "Hall", icon: "arrow-right"},
        {name: "Stadium", icon: "arrow-right"},
      ]
    }
  },
})
</script>
<style scoped>
h2 {
  position: relative;
  display: inline-block;
  padding: .2rem .6rem;
  width: auto;
}

h2::before {
  background-color: var(--color-accent);

  content: "";
  position: absolute;
  width: calc(100% + 4px);
  height: 60%;
  left: -2px;
  bottom: 0;
  z-index: -1;
  transform: rotate(-2deg);
}

main {
  max-width: 830px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5rem;
  padding-bottom: 5rem;
}

button {
  float: right;
}

div.details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
}

div.item-holder {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
}

div.item {
  position: relative;
  border: 3px solid #efefef;
  padding: 1rem 2rem;
  vertical-align: top;
  cursor: pointer;
  transition: all .25s;
}

div.item:hover {
  transform: scale(.95);
  box-shadow: 0 0 0 10px rgba(0, 0, 0, .025);
}

div.item i {
  position: absolute;
  right: 1rem;
  transform: translateY(0.15rem);
}

div.item div.info span {
  text-align: right;
  float: right;
  width: 100%;
}

div.item div.info span.place {
  opacity: .5;
}

div.item div.image {
  display: inline-block;
  width: 150px;
  height: 150px;
  background-size: cover;
  background-position: center;
}

div.item:nth-of-type(1) div.image {
  background-image: url("@/assets/projects/csm_facilityservices_ref_dsvlogistik-krefeld_68310724bd.jpeg");
}

div.item:nth-of-type(2) div.image {
  background-image: url("@/assets/projects/csm_parkhaus_MK8_gateway_gardens_27_886d255e7d.jpg");
}

div.item:nth-of-type(3) div.image {
  background-image: url("@/assets/projects/csm_parkingservices_referenz_northgate_4c3b2565da.jpeg");
}

div.item:nth-of-type(4) div.image {
  background-image: url("@/assets/projects/csm_Welcome-Forum_Schueco_01_9adb6ba882.jpeg");
}

div.item:nth-of-type(5) div.image {
  background-image: url("@/assets/projects/tesla-gigafactory-01.jpeg");
}
</style>