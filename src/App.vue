<template>
  <div id="app">
    <VueLeaflet />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import MapBox from './components/MapBox.vue'
import VueLeaflet from './components/VueLeaflet.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // MapBox,
    VueLeaflet,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
