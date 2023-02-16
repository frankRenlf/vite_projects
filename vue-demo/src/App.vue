<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import PiniaTest from "@/components/PiniaTest.vue";
import App_input_form from "@/App_input_form.vue";
const uc = useCounterStore();
</script>

<template>
  <pinia-test></pinia-test>
  <div>{{ uc.count }}</div>
  <app_input_form></app_input_form>
</template>
