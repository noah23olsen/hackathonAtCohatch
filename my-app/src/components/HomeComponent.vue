<template>
  <div>
    <img src="../assets/Quiz.AI.png" alt="" v-if="responseFromGPT == ''" />
    <div class="userInputSection">
      <label for="topic">Enter a topic </label>
      <input type="text" id="topic" name="topic" placeholder="give me quizzes for..." v-model="topic" />
      <button @click="getGptResponse()">Submit</button>
      <button @click="clear">Clear</button>
    </div>
    
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
    let topic = ref("");
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
    clear() {
      this.responseFromGPT = "";
      this.choices = [];
      this.correctChoice = "";
      this.correctChoices = [];
      this.questions = [];
      this.topic = "";
    },
    getGptResponse() {
      openAIService
        .generateQuiz(this.content)
        .then((response) => {
          this.responseFromGPT = response.data.choices[0].message.content;
          this.getQuestionsAndAnswers();
        })
        .catch((error) => console.log(error));
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
      this.choices = [];
      this.correctChoice = "";
      this.correctChoices = [];
      this.questions = [];


      let responseArraySplit = this.responseFromGPT.split("\n");
      console.log(responseArraySplit);
      let question = "";
      let choice = {};

      for (const line of responseArraySplit) {
        console.log(line);
        if (/^[0-9]/.test(line)) {
          question = line;
          this.questions.push(question);
        } else if (line.includes("a)")) {
          console.log("reached inside a");
          choice.a = this.lineWithoutCorrect(line);
        } else if (line.startsWith("b)")) {
          choice.b = this.lineWithoutCorrect(line);
        } else if (line.startsWith("c)")) {
          choice.c = this.lineWithoutCorrect(line);
        } else if (line.startsWith("d)")) {
          choice.d = this.lineWithoutCorrect(line);
        } else {
          // console.log('reached the else block ' + line)
          // this.question += line;
        }
        console.log(choice);
        if (Object.keys(choice).length == 4) {
          console.log("there were 4 keys");

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

<style>;
img{
  height: 30%;
  width:30%;
}
input[type="text"],
button {
  font-size: 16px;
  padding: 10px;
}
input{
  font-size:30px;
}

</style>
