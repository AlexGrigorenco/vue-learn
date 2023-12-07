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
  .fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transform: scale(1);
  transition: 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0);
}

@keyframes pulse {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>