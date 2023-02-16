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
      <a href="#main" ref="skipLink" class="skip-link">Skip to main content</a>
    </li>
  </ul>

  <pinia-test></pinia-test>
  <div>{{ uc.count }}</div>
  <SlotCom>
    <template #item="item1"> {{ item1.id }} </template>
  </SlotCom>
  <AppFetch></AppFetch>
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
