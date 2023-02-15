<script setup lang="ts">
import {ref, shallowRef} from "vue";
import App_transitionGroup2 from "@/App_transitionGroup2.vue";
import App_transitionGroup1 from "@/App_transitionGroup1.vue";
const cur = shallowRef(App_transitionGroup1);
let open = ref(false);
</script>

<template>
  <button @click="open = true">Open Modal</button>
  <Teleport to="body">
    <div v-if="open" class="modal">
      <p>Hello from the modal!</p>
      <button @click="open = false">Close</button>
    </div>
  </Teleport>
  <input type="radio" v-model="cur" :value="App_transitionGroup1" />
  <input type="radio" v-model="cur" :value="App_transitionGroup2" />
  <keep-alive :include="['App_transitionGroup2']">
    <component :is="cur"></component>
  </keep-alive>
</template>
