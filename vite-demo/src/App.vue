<script setup lang="ts">
import {ref} from "vue";
let a=ref(5);
const del = ()=>{
  a.value--;
}
</script>

<template>
  <div>
    <h1 v-show="a">{{a}}</h1>
    <button @click="del">del</button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
