<template>
  <h2>{{ doubleCount }}</h2>
  <button @click="increment()">increment</button>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";

const uc = useCounterStore();
let { increment } = uc;
let { doubleCount } = storeToRefs(uc);
</script>

<style scoped></style>
