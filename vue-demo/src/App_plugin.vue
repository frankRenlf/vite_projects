<script setup lang="ts">
import { ref } from "vue";

let display = ref(false);
</script>

<template>
  <button @click="display = !display">dispaly</button>
  <transition name="display">
    <div v-show="display">{{ $translate("greetings.hi") }}</div>
  </transition>
</template>

<style lang="less">
.display-enter-active,
.display-leave-active {
  transition: opacity 0.5s ease;
}

.display-enter-from,
.display-leave-to {
  opacity: 0;
}
</style>
