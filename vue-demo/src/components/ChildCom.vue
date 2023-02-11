<template>
  <div>{{ props.fb }}</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
let props = defineProps(["fa", "fb"]);
let a = 1;
const b = ref("fff");
defineExpose({
  a,
  b,
});
</script>

<style scoped></style>
