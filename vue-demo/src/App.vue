<script setup lang="ts">
import { ref } from "vue";

let display = ref(false);
</script>

<template>
  <button @click="display = !display">dispaly</button>
  <transition>
    <div v-show="display">{{ $translate("greetings.hi") }}</div>
  </transition>
</template>

<style lang="less">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
