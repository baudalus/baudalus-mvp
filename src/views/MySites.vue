<script setup lang="ts">
import InputText from "@/components/InputText.vue";
import ButtonPrimary from "@/components/ButtonPrimary.vue";
</script>

<template>
  <main>
    <div class="mb-3rem">
      <ButtonPrimary @click="$router.push('/new')" icon="plus">New Site</ButtonPrimary>
      <div class="header">
        <img src="@/assets/logo.svg" alt="Baudalus Logo"/>
        <h1 class="mb-2rem">My Sites</h1>
      </div>
    </div>
    <div class="mb-2rem">
      <InputText v-model="query" placeholder="Search for project"/>
    </div>
    <div class="item-holder">
      <div
          v-for="(project, idx) in projects.filter(p => p.name.toLowerCase().includes(query.toLowerCase()))"
          :key="`project_${idx}`"
          class="item"
        >
        <div class="image"/>
        <div class="info">
          <span class="name">{{project.name}}</span>
          <span class="place">{{project.place}}</span>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  data() {
    return {
      query: "",
      projects: [
        {name: "DSV Logistik", place: "Krefeld"},
        {name: "Tesla Giga Factory", place: "Grünheide"},
        {name: "Gateway Gardens", place: "Frankfurt"},
        {name: "Northgate", place: "Berlin"},
        {name: "Schüco Welcome Forum", place: "Bielefeld"},
      ]
    }
  },
  watch: {
    query () {
      console.log(this.query)
    }
  }
})
</script>
<style scoped>

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

div.item-holder {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
}
div.item {
  border: 3px solid #efefef;
  padding: 1.5rem;
  vertical-align: top;
  transition: all .25s;
  cursor: pointer;
}

div.item:hover{
  transform: scale(.95);
  box-shadow: 0 0 0 10px rgba(0,0,0,.025);
}

div.item div.info{
  max-width: calc(100% - 150px);
  float: right;
}
div.item div.info span{
  text-align: right;
  float: right;
  width: 100%;
}
div.item div.info span.place{
  opacity: .5;
}
div.item div.image{
  display: inline-block;
  width: 150px;
  height: 150px;
  background-size: cover;
  background-position: center;
}
div.item:nth-of-type(1) div.image{
  background-image: url("@/assets/projects/csm_facilityservices_ref_dsvlogistik-krefeld_68310724bd.jpeg");
}
div.item:nth-of-type(2) div.image{
  background-image: url("@/assets/projects/tesla-gigafactory-01.jpeg");
}
div.item:nth-of-type(3) div.image{
  background-image: url("@/assets/projects/csm_parkhaus_MK8_gateway_gardens_27_886d255e7d.jpg");
}
div.item:nth-of-type(4) div.image{
  background-image: url("@/assets/projects/csm_parkingservices_referenz_northgate_4c3b2565da.jpeg");
}
div.item:nth-of-type(5) div.image{
  background-image: url("@/assets/projects/csm_Welcome-Forum_Schueco_01_9adb6ba882.jpeg");
}


.header img{
  height: 1.7rem;
  opacity: 1;
  margin-top: .5rem;
  padding-right: 1rem;
  margin-right: 1rem;
  border-right: 6px solid #bebebe;
}

.header h1 {
  display: inline-block;
  margin: 0;
}

@media only screen and (max-device-width: 480px) {
  main {
    width: 100%;
    height: 100vh;
    padding: 2rem;
  }

  div.item-holder {
    grid-template-columns: 1fr;
    margin-bottom: 3rem;
  }

}

</style>