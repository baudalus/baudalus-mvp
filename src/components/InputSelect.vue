<template>
  <div class="select">
    <select>
      <option
          v-for="(option, idx) in options"
          :key="`option_${idx}`"
          :value="option.value">
        {{option.title}}
      </option>
    </select>
    <VueFeather type="chevron-down"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  props: ["options"]
})
</script>

<style scoped>
div.select {
  background: #ffffff;
  border-radius: var(--border-radius);
  border: 3px solid #efefef;
}
select{
  padding: .95rem 3rem .95rem 2rem;
  font-size: inherit;
  background: #ffffff;
  border: none;
  outline: none;
  transition: all .25s;
  appearance: none;
}
i {
  position: absolute;
  top: 1rem;
  right: 1rem;
}
</style>