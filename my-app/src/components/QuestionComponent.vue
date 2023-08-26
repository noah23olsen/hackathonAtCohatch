<template>
  <main class="questionContainer">
    <h2>{{ question }}</h2>
    <div class="choiceContainer">
    <div class="individualChoice">
      <input type="radio" id="a" value="a" v-model="picked" @click="isChoiceCorrect('a')" />
      <label :class="{ correct: isChoiceCorrect('a') }" for="a">{{ choice.a }}</label>
</div>
    </div>
    <div class="individualChoice">
      <input type="radio" id="b" value="b" v-model="picked" @click="isChoiceCorrect('b')" />
      <label :class="{ correct: isChoiceCorrect('b') }" for="b">{{ choice.b }}</label>
    </div>
    <div class="individualChoice">
       <input type="radio" id="c" value="c" v-model="picked"  @click="isChoiceCorrect('c')"/>
       <label :class="{ correct: isChoiceCorrect('c') }" for="c">{{ choice.c }}</label>
    </div>
    <div class="individualChoice">
      <input type="radio" id="d" value="d" v-model="picked" @click="isChoiceCorrect('d')" />
      <label :class="{ correct: isChoiceCorrect('d') }" for="d">{{ choice.d }}</label>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["question", "choice", "correctChoice"],
  setup() {
    let picked = ref("");
    return { picked };
  },
  methods: {
    isChoiceCorrect(choice) {
    return this.correctChoice === choice && this.picked === choice;
  }
  },
};
</script>

<style>
.individualChoice{
  align-items:center;
  display:flex;
}
.questionContainer {
  align-items:center;
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  border-radius:25px;
  background-color: whitesmoke;
  margin: 10px;
  width: 70%;
  height: 70%;
  margin-left: 200px;
}
.choiceContainer {
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  margin: 10px;
  height: 70%;
  width:auto;
}
.correct{
  color:lime;
  background-color:gray;
 }

</style>