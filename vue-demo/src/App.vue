<script setup lang="ts">
import SlotCom from "@/components/SlotCom.vue";
import { useMouse } from "@/hooks/mouse";
let { x, y } = useMouse();
</script>

<template>
  <SlotCom>
    <template #item="item">
      <p>{{ item.id }}</p>
      <p>by {{ item.address }}</p>
    </template>
  </SlotCom>
  <div>{{ x }}--{{ y }}</div>
</template>
