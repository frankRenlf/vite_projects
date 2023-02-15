<script setup lang="ts">
import { shallowRef } from "vue";
import App_transitionGroup2 from "@/App_transitionGroup2.vue";
import App_transitionGroup1 from "@/App_transitionGroup1.vue";
const cur = shallowRef(App_transitionGroup1);
</script>

<template>
  <input type="radio" v-model="cur" :value="App_transitionGroup1" />
  <input type="radio" v-model="cur" :value="App_transitionGroup2" />
  <keep-alive :include="['App_transitionGroup2']">
    <component :is="cur"></component>
  </keep-alive>
</template>
