<script setup lang="ts">
import InputText from "@/components/InputText.vue";
import ButtonPrimary from "@/components/ButtonPrimary.vue";
</script>

<template>
  <main>
    <h1 class="mb-2rem">Login</h1>
    <InputText
        placeholder="Your username"
        class="mb-1rem"/>
    <InputText
        placeholder="Your password"
        type="password"
        class="mb-3rem"/>
    <ButtonPrimary @click="$router.push('/app')">Login</ButtonPrimary>
  </main>
</template>

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
  box-shadow: 0 0 40px 40px rgba(0,0,0,0.05);
  border-radius: var(--border-radius);
  transform: translate(-50%, -50%);
  padding: 3rem;
}

button {
  float: right;
}
</style>