<template>
  <div>
    <question-component
      v-for="(question, questionIndex) in questions"
      :key="question"
      :question="question"
      :choice="choices[questionIndex]"
      :correctChoice="correctChoices[questionIndex]"
    />
    <input type="submit" text="submit">
  </div>
</template>

<script>
import QuestionComponent from "./QuestionComponent.vue";

export default {
  components: { QuestionComponent },
  props: ["questions", "choices", "correctChoices"],
};
</script>

<style>
input[type="text"],
button {
  font-size: 16px;
  padding: 10px;
}
input{
  font-size:30px;
}
</style>