<template>
  <div>
    <h1>Input value: {{ inputValue }}</h1>
    <input v-model="inputValue">
    <button v-on:click="compSettable = inputValue">Set header to text from input></button>

    <h1>compSettable value: {{ compSettable }}</h1>
  </div>
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

<style scoped>

</style>