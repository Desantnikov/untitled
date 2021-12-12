<template>
  <div class="hello">
    <h1>Value: {{ value }}</h1>
    <h2>Rand: {{ rand }}</h2>
    <h3>I: {{ i }}</h3>
    <h4>Check: {{ check }}</h4>
    <button v-on:click="$emit('input', value + 1)">Change value</button>
    <button v-on:click="check = check + 1">Change check</button>
    <br>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'Second',
  props: ['value', 'i'],
  data: function () {
    return {
      rand: Math.random(),
      check: 1488,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
br {
  margin: 3em;
}
</style>
