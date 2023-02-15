<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";
import PiniaTest from "@/components/PiniaTest.vue";
const uc = useCounterStore();
let { count } = storeToRefs(uc);
console.log(count);
</script>

<template>
  <pinia-test></pinia-test>
  <div>{{ count }}</div>
</template>
