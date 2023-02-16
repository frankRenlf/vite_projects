<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import PiniaTest from "@/components/PiniaTest.vue";
const uc = useCounterStore();
</script>

<template>
  <pinia-test></pinia-test>
  <div>{{ uc.count }}</div>
</template>
