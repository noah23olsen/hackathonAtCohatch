<template>
<section>
  <div>
    <question-component
      v-for="(question, questionIndex) in questions"
      :key="question"
      :question="question"
      :choice="choices[questionIndex]"
      :correctChoice="correctChoices[questionIndex]"
    />
    <input type="submit" @click="changeImgValueToTrue" text="submit">
  </div>
  </section>
</template>

<script>
import QuestionComponent from "./QuestionComponent.vue";
import { ref } from "vue";
export default {
  setup(){
    let imgVal = ref(false);
    return {imgVal}
  },
  components: { QuestionComponent },
  props: ["questions", "choices", "correctChoices"],
  methods: {
    changeImgValueToTrue(){
      this.imgVal = true;
    }
  }
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