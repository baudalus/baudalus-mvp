<template>
  <input type="text"
         :value="modelValue"
         ref="input"
         @input="emit">
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  props: ["modelValue"],
  methods: {
    emit() {
      const input: HTMLInputElement = this.$refs.input as HTMLInputElement
      this.$emit("update:modelValue", input.value)
    }
  }
})
</script>

<style scoped>
input {
  width: 100%;
  padding: .95rem 1rem;
  font-size: inherit;
  border: 3px solid #efefef;
  border-radius: var(--border-radius);
  outline: none;
  transition: all .25s;
}

input:hover {
  border: 3px solid #dcdcdc;
}

input:focus {
  border: 3px solid #000000;
}
</style>