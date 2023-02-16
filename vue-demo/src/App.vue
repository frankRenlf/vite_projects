<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import PiniaTest from "@/components/PiniaTest.vue";
import SlotCom from "@/components/SlotCom.vue";
import Fetch from "@/AppFetch.vue";
import AppFetch from "@/AppFetch.vue";
const uc = useCounterStore();
</script>

<template>
  <ul class="skip-links">
    <li>
      <a href="/" ref="skipLink" class="skip-link">Skip to main content</a>
    </li>
  </ul>
  <router-link to="/AppFetch">AppFetch</router-link>
  <hr />
    <router-link to="/App_transitionGroup2">App_transitionGroup2</router-link>
  <hr />
  <router-view v-slot="{ App_transitionGroup2 }">
    <keep-alive>
      <component :is="App_transitionGroup2" />
    </keep-alive>
  </router-view>

</template>

<style>
.skip-link {
  white-space: nowrap;
  top: 0;
  position: fixed;
  left: 50%;
  margin: 1em auto 1em -72px;
  opacity: 0;
}
.skip-link:hover {
  opacity: 1;
  background-color: white;
  padding: 0.5em;
  border: 1px solid black;
}
</style>
