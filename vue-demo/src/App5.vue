<script setup lang="ts">
import { onMounted, ref } from "vue";
import ChildCom from "@/components/ChildCom.vue";

const ip = ref();
const cc = ref();
onMounted(() => {
  console.log(ip.value);
  console.log(cc.value.a);
  cc.value.a = 2;
  cc.value.b = "aaa";
});
let variable1 = ref({
  x: 1,
  y: 2,
});
let variable2 = ref({
  x: 3,
  y: 4,
});
</script>

<template>
  <input
    type="text"
    :ref="
      (el) => {
        ip = el;
      }
    "
  />
  <child-com :fa="variable1" :fb="variable2" ref="cc"></child-com>
</template>
