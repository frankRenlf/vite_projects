<script setup lang="ts">
import { reactive, ref, watch, watchEffect } from "vue";
import IndexComponent from "@/components/layout/IndexComponent.vue";
</script>

<template>
  <IndexComponent></IndexComponent>
</template>

<style lang="less">
html,
body,
#app {
  height: 100%;
  overflow: hidden;
}
</style>
