<template>
  <h2>{{ uc.doubleCount }}</h2>
  <button @click="uc.increment()">increment</button>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";

const uc = useCounterStore();
</script>

<style scoped></style>
