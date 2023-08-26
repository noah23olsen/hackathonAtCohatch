<template>
  <main class="questionContainer">
    <h2>{{ question }}</h2>
    <div class="choiceContainer">
    <div class="individualChoice">
      <input type="radio" id="a" value="a" v-model="picked" />
      <label for="a">{{ choice.a }}</label>
    </div>
    <div class="individualChoice">
      <input type="radio" id="b" value="b" v-model="picked" />
      <label for="b">{{ choice.b }}</label>
    </div>
    <div class="individualChoice">
       <input type="radio" id="c" value="c" v-model="picked" />
       <label for="c">{{ choice.c }}</label>
    </div>
    <div class="individualChoice">
      <input type="radio" id="d" value="d" v-model="picked" />
      <label for="d">{{ choice.d }}</label>
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
    checkAnswer() {
      return this.picked == this.correctChoice;
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
  background-color: whitesmoke;
  margin: 10px;
  width: 70%;
  height: 70%;
  margin-left: 200px;
}
.choiceContainer {
  display: flex;
  border: 2px solid black;
  flex-direction: column;
  background-color: whitesmoke;
  margin: 10px;
  height: 70%;
  width:auto;
}
</style>