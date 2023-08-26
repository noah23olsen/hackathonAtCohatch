<template>
  <div>
    <input type="text" id="topic" name="topic" v-model="topic" />
    <button @click="getGptResponse()">Submit</button>

    <quiz-component
      v-show="responseFromGPT"
      :questions="questions"
      :choices="choices"
      :correctChoices="correctChoices"
    />
  </div>
</template>

<script>
import { ref, computed, reactive } from "vue";
import openAIService from "../services/OpenAIService";
import QuizComponent from "./QuizComponent.vue";

export default {
  components: { QuizComponent },
  setup() {
    let topic = ref("java");
    let content = computed(
      () =>
        `Give me 10 questions about ${topic.value}. Each question should have four multiple choices with only one correct answer. Label the correct answer with (correct) at the end. start each question with the number, and a ")" `
    );
    let responseFromGPT = ref("");

    let questions = reactive([]);
    let choices = reactive([]);
    let correctChoice = ref("");
    let correctChoices = reactive([]);
    return {
      topic,
      content,
      responseFromGPT,
      questions,
      choices,
      correctChoice,
      correctChoices,
    };
  },
  methods: {
    getGptResponse() {
      openAIService
        .generateQuiz(this.content)
        .then((response) => {
          this.responseFromGPT = response.data.choices[0].message.content;
          this.getQuestionsAndAnswers();
        })
        .catch((error) => console.log(error + "this is an error!!!!"));
    },
    lineWithoutCorrect(str) {
      const indicator = "(correct)";
      const i = str.indexOf(indicator);
      if (i > -1) {
        this.correctChoice = str[0];
        return str.slice(0, i);
      }
      return str;
    },
    getQuestionsAndAnswers() {
      let responseArraySplit = this.responseFromGPT.split("\n");
      let question = "";
      let choice = {};

      for (const line of responseArraySplit) {
        if (line.startsWith("a)")) {
          choice.a = this.lineWithoutCorrect(line);
        } else if (line.startsWith("b)")) {
          choice.b = this.lineWithoutCorrect(line);
        } else if (line.startsWith("c)")) {
          choice.c = this.lineWithoutCorrect(line);
        } else if (line.startsWith("d)")) {
          choice.d = this.lineWithoutCorrect(line);
        } else if (line) {
          question += line + "\n";
        }
        console.log(choice);
        if (Object.keys(choice).length == 4) {
          this.questions.push(question);
          question = "";

          this.choices.push({ ...choice });
          choice = {};

          this.correctChoices.push(this.correctChoice);
          this.correctChoice = "";
        }
      }
    },
  },
};
</script>

<style>
</style>
