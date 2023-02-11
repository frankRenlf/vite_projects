<template>
  <div>{{}}</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

let a = 1;
const b = ref("fff");
defineExpose({
  a,
  b,
});
</script>

<style scoped></style>
