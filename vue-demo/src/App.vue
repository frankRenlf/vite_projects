<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import PiniaTest from "@/components/PiniaTest.vue";
import SlotCom from "@/components/SlotCom.vue";
import Fetch from "@/Fetch.vue";
const uc = useCounterStore();
</script>

<template>
  <pinia-test></pinia-test>
  <div>{{ uc.count }}</div>
  <SlotCom>
    <template #item="item1"> {{ item1.id }}  </template>
  </SlotCom>
  <Fetch></Fetch>
</template>
