<template>
  <div>
    <input type="text" id="topic" name="topic" v-model="topic" />
    <button @click="getGptResponse()">Submit</button>
    <h1>{{ topic }}</h1>
    <h1>{{ content }}</h1>
    <quiz-component v-show="responseFromGPT" item="responseFromGPT" />
  </div>
</template>

<script>

import { ref, computed } from "vue";
import openAIService from "../services/OpenAIService";
import QuizComponent from './QuizComponent.vue';

export default {
  components: { QuizComponent },
  setup() {
    let topic = ref("java");
    let content = computed(() => `Give me 10 questions about ${topic.value}. Each question should have four multiple choices with only one correct answer. Label the correct answer with (correct) at the end.`);
    let responseFromGPT = ref("");
    return { topic, content, responseFromGPT };
  },
  methods: {
    getGptResponse() {
      openAIService
        .generateQuiz(this.content)
        .then((response) => {
          this.responseFromGPT = response.data.choices[0].message.content;
          console.log(response.data.choices[0].message.content);
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
</style>
