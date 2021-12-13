

<template>
  <v-main>
    <v-btn v-on:click="responseValue = performRequest(responseValue)">Perform request</v-btn>
    <v-banner class="">Response value: {{ responseValue }}</v-banner>
  </v-main>

</template>


<script crossorigin="">
import axios from "axios";


export default {
  name: 'HelloWorld',
  data: () => ({
    responseValue: "",
  }),
  methods: {
    performRequest () {

      axios.get('/api')
        .then((response) => {
          this.responseValue = response.data.data;
        })
        .catch((error) => {
          this.responseValue = "Request error: " + error;
        })
    }
  }
}
</script>


