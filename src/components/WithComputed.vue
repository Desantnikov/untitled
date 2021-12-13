<template>
  <v-container class="secondary">
    <v-card outlined class="primary">
      <v-card-title >Input value: {{ inputValue }}</v-card-title>
      <v-text-field outlined v-model="inputValue"></v-text-field>
      <v-btn v-on:click="compSettable = inputValue">Set header to text from input></v-btn>
      <v-card-text class="accent">compSettable value: {{ compSettable }}</v-card-text>
    </v-card>
  </v-container>
</template>

<script>

export default {
  name: "WithComputed",
  props: ['compSettableProp'],
  data: (props) => ({
    compSettableData: props.compSettableProp,
    inputValue: "Initial value;",
  }),
  computed: {
    compSettable: {
      get() {
        return this.compSettableData || ""
      },
      set(val) {
        this.compSettableData = this.compSettableData + " Added: " + val + ";"
      },
    }
  }
}
</script>
