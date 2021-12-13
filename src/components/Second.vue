<template>
  <v-container class="hello">
    <v-banner
        color="accent"
        rounded
    >
      Value: {{ value }}
    </v-banner>

    <v-banner color="accent">Rand: {{ rand }}</v-banner>

    <v-banner>I: {{ i }}</v-banner>
    <v-banner>Check: {{ check }}</v-banner>
    <v-btn v-on:click="$emit('input', value + 1)">Change value</v-btn>
    <v-btn v-on:click="$emit('checkIncr', check + 1)">Change check</v-btn>
    <br>
    <hr>
  </v-container>
</template>

<script>
export default {
  name: 'Second',
  props: ['value', 'i', 'check'],
  data: function () {
    return {
      rand: Math.random(),
      // check: 1488,
    }
  },
}
</script>
