<script setup lang="ts">
import {ref} from "vue";
let a=ref(1);
const add = ()=>{
  a++;
}
</script>

<template>
  <div>
    {{a}}
    <button @click="add">add</button>
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
