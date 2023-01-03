<script setup lang="ts">
import {reactive, ref} from "vue";

let a = ref(5);
let b = ref('')
const arr = reactive([
  {'id': 1, 'gender': 'male'},
  {'id': 2, 'gender': 'female'},
])
const del = () => {
  a.value--;
}
</script>

<template>
  <div>
    <input type="text" v-model="b">
    <h2>{{ b }}</h2>
    <h1 v-show="a">{{ a }}</h1>
    <button @click="del">del</button>
  </div>
  <div>
    <div v-for="a in arr" :key="a.id">{{ a }}</div>
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
