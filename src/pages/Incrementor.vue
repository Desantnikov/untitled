<template>
  <div id="app">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld value="Welcome to Your Vue.js App"/>
    <Second
        v-for="i in Array(3).keys()"
        :key="i"
        v-model="msg"
        :i="i"
        :check="0"
    />
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import Second from '../components/Second.vue'

export default {
  name: 'Incrementor',
  components: {
    HelloWorld,
    Second
  },
  data: () => ({msg: 0}),
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
img {
  height: 2em
}
</style>
