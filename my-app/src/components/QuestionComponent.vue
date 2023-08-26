<template>
  <main class="questionContainer">
    <h1>{{ question }}</h1>
    <div class="choiceContainer">
    <div class="individualChoice">
      <input type="radio" value="a" v-model="picked" @click="isChoiceCorrect('a')" />
      <label :class="{ correct: isChoiceCorrect('a'), incorrect: isChoiceIncorrect('a') }" for="a">{{ choice.a }}</label>
    </div>
    <div class="individualChoice">
      <input type="radio"  value="b" v-model="picked" @click="isChoiceCorrect('b')" />
       <label :class="{ correct: isChoiceCorrect('b'), incorrect: isChoiceIncorrect('b') }" for="b">{{ choice.b }}</label>
    </div>
    <div class="individualChoice">
       <input type="radio"  value="c" v-model="picked"  @click="isChoiceCorrect('c')"/>
 <label :class="{ correct: isChoiceCorrect('c'), incorrect: isChoiceIncorrect('c') }" for="c">{{ choice.c }}</label>    </div>
    <div class="individualChoice">
      <input type="radio"  value="d" v-model="picked" @click="isChoiceCorrect('d')" />
       <label :class="{ correct: isChoiceCorrect('d'), incorrect: isChoiceIncorrect('d') }" for="d">{{ choice.d }}</label>
    </div>
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
  },
   isChoiceIncorrect(choice) {
      return this.correctChoice !== choice && this.picked === choice;
    },
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
  background-color: rgb(214, 236, 249);
  margin: 10px;
  width: 70%;
  height: 70%;
  margin-left: 200px;
}
.choiceContainer {
  font-size:2rem;
  display: flex;
  flex-direction: column;
  background-color: rgb(214, 236, 249);
  margin: 10px;
  height: 70%;
  width:auto;
}
.correct{
  color:green;
  background-color:white;
  border:1px solid green;
 }
.incorrect {
  color: red;
  background-color: white;
  border: 1px solid red;
}
input[type="radio"] {
  transform: scale(2);
  margin:10px; /* Increase the scale as needed */
}
</style>