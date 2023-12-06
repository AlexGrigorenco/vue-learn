<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/Navbar.vue'
  export default {
    components: {
      NavBar
    }
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-size: 20px;
    overflow-x: hidden;
  }
  .container {
    max-width: 1200px;
    padding: 0 16px;
    margin: 0 auto;
  }
</style>