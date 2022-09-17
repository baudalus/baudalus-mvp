<script setup lang="ts">
import InputText from "@/components/InputText.vue";
import ButtonPrimary from "@/components/ButtonPrimary.vue";
</script>

<template>
  <main>
    <img src="@/assets/loading.gif" alt="Loading...">
    <h2>Please wait... <br> Under efficient construction.</h2>
  </main>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
   mounted() {
     setTimeout(() => {this.$router.push("app")}, 3000)
   }
})
</script>
<style scoped>

h1 {
  padding: 0;
  margin-top: 0;
}
main {
  position: absolute;
  top: 50vh;
  left: 50%;
  width: 500px;
  height: 450px;
  border-radius: var(--border-radius);
  transform: translate(-50%, -50%);
  padding: 3rem;
  text-align: center;
}

img {
  width: 15rem;
  border: 3px solid #000000;
}

button {
  float: right;
}
</style>