<script setup lang="ts">
import InputText from "@/components/InputText.vue";
import ButtonPrimary from "@/components/ButtonPrimary.vue";
</script>

<template>
  <main>
    <div class="header">
      <img src="@/assets/logo.svg" alt="Baudalus Logo"/>
      <h1 class="mb-2rem">Login</h1>
    </div>
    <InputText
        placeholder="Your username"
        value="construction-manager"
        class="mb-1rem"/>
    <InputText
        placeholder="Your password"
        value="meinpasswort"
        type="password"
        class="mb-3rem"/>
    <ButtonPrimary @click="$router.push('/mysites')">Login</ButtonPrimary>
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
}

@media only screen and (max-device-width: 480px) {
  main {
    width: 100%;
    height: 100vh;
  }
}
</style>