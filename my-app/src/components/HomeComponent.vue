<template>
  <div>
    <button @click="getGptResponse">{{this.responseFromGPT}}</button>
  </div>
</template>

<script>
import OpenAiService from '../services/OpenAiService';
export default {
  setup() {
      let topic = "java";  
      let responseFromGPT=  "";
      return {topic, responseFromGPT};
  },
methods: {
getGptResponse() {
      OpenAiService.generateChat()
        .then((response) => {
          this.responseFromGPT = (response.data.choices[0].message.content);
          console.log(response.data.choices[0].message.content);
        })
        .catch(error=>console.log(error));
    },
}
}
</script>

<style>

</style>
