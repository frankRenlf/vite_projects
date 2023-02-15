<script setup lang="ts"></script>

<template>
  <transition>
    <div>{{ $translate("greetings.hi") }}</div>
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
