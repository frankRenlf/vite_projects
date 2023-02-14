<template>
  <ul>
    slot transfer props must use v-bind=""
    <li v-for="item in items" :key="item.id">
      <slot name="item" v-bind="item"></slot>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const items = reactive([
  { id: 0, address: "hz" },
  { id: 2, address: "sh" },
]);
</script>

<style scoped></style>
