<template>
  <div>
    
  </div>
</template>

<script>
import OpenAiService from '../services/OpenAiService';
export default {
created(){
  this.getGptResponse()
},
methods: {
getGptResponse() {
      OpenAiService.generateChat()
        .then((response) => {
          console.log(response.data.choices[0].message.content);
        })
    },
}
}
</script>

<style>

</style>
