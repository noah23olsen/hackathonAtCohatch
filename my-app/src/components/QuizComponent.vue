<template>
  <div>
    <question-component
      v-for="(question,
      questionIndex)
      in
      questions"
      :key="question"
      :question="question"
      :choice="choices[questionIndex]"
      :correctChoice="correctChoices[questionIndex]"
    />
    <!-- <p>{{ questions }}</p>
    <p>{{ choices }}</p>
    <p>{{ correctChoices }}</p> -->
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
</style>