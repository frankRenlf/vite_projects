<template>
  <slot name="test" :propsData="props"> default </slot>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const props = reactive({
  age: 11,
  address: "hz",
});
</script>

<style scoped></style>
