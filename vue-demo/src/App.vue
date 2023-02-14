<script setup lang="ts">
import SlotCom from "@/components/SlotCom.vue";
import { useMouse } from "@/hooks/mouse";
let { x, y } = useMouse();

import { ref, computed } from "vue";
import { useFetch } from "@/hooks/useFetch.js";

const baseUrl = "https://jsonplaceholder.typicode.com/todos/";
const id = ref("1");
const url = computed(() => baseUrl + id.value);

const { data, error, retry } = useFetch(url);
const vDemo = {
  mounted(el: HTMLElement, binding: any) {
    console.log(el, binding);
    el.style.color = binding.value.color;
    el.innerText = binding.value.text;
  },
};
</script>

<template>
  <div v-demo="{ color: 'green', text: 'hello!' }"></div>
  <SlotCom>
    <template #item="item">
      <p>{{ item.id }}</p>
      <p>by {{ item.address }}</p>
    </template>
  </SlotCom>
  <div>{{ x }}--{{ y }}</div>

  Load post id:
  <button v-for="i in 5" :key="i" @click="id = i">{{ i }}</button>
  <div v-if="error">
    <p>Oops! Error encountered: {{ error.message }}</p>
    <button @click="retry">Retry</button>
  </div>
  <div v-else-if="data">
    Data loaded:
    <pre>{{ data }}</pre>
  </div>
  <div v-else>Loading...</div>
</template>
