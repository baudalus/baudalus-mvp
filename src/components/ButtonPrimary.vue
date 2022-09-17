<template>
  <button>
    <VueFeather v-if="icon" :type="icon"/>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "ButtonPrimary",
  props: ["icon"]
})
</script>

<style scoped>
button {
  padding: .6rem 2.5rem;
  background: var(--color-accent);
  border: none;
  outline: none;
  color: #000;
  font-size: 1rem;
  font-weight: bold;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all .125s;
}

button:hover {
  transform: scale(.95);
  box-shadow: 0 0 0 10px rgba(0,0,0,.05);
}

button i {
  transform: translate(-.5rem, .175rem);
}

</style>
