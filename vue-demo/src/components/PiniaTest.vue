<template>
  <h2>{{ uc.doubleCount }}</h2>
  <button @click="uc.increment()">increment</button>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";

const uc = useCounterStore();
</script>

<style scoped></style>
