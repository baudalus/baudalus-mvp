<template>
  <div class="menu-bar">
    <img src="@/assets/logo.svg" class="mb-3rem" alt="Logo Baudalus">
    <div class="menu">
      <RouterLink to="/app">
        <div class="item"><VueFeather type="tool"/></div>
      </RouterLink>
      <RouterLink to="/docs">
        <div class="item"><VueFeather type="file-text"/></div>
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "MenuBar"
}
</script>

<style scoped>
.menu-bar {
  position: fixed;
  top: 3rem;
  left: 3rem;
  z-index: 10;
  background: #fff;
  padding: 2rem;
  overflow: hidden;
  box-shadow: 0 0 40px 40px rgba(0,0,0,0.05);
}

.menu-bar img{
  width: 2.5rem;
}

.menu-bar .menu .item {
  position: relative;
  width: 3rem;
  height: 3rem;
  border: 3px solid #f8f8f8;
  margin-bottom: 1rem;
  transition: all .25s;
}
.menu-bar .menu .item i{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
}

a.router-link-active .item {
  border: 3px solid #000000 !important;
}

.menu-bar .menu .item:hover{
  transform: scale(.95);
  box-shadow: 0 0 0 10px rgba(0,0,0,.015);
}
</style>