<template>
  <v-main>
    <v-container>

      <v-row>

        <v-col cols="4">
          <v-img :src="require('../assets/logo.png')"/>
        </v-col>

        <v-col cols="4">
          <HelloWorld value="Hello World! Value"/>
        </v-col>

        <v-col cols="4">
          <v-img :src="require('../assets/logo.png')"/>
        </v-col>

      </v-row>


      <v-row>

        <v-col
            v-for="i in Array(8).keys()"
            :key="i"
        >

          <Second
            v-model="msg"
            :i="i"
            :check="check"
            v-on:checkIncr="(inpVal) => check = inpVal"
          />

        </v-col>

      </v-row>


    </v-container>
  </v-main>
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
  data: () => ({
    msg: 0,
    check: 0,
  }),
}

</script>

