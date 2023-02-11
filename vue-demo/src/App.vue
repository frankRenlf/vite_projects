<script setup>
import { onMounted, ref } from "vue";
import ChildCom from "@/components/ChildCom.vue";

const ip = ref();
const cc = ref();
onMounted(() => {
  console.log(ip.value);
  console.log(cc.value.a);
  cc.value.a=2;
  cc.value.b="aaa";
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
  <child-com ref="cc"></child-com>
</template>
