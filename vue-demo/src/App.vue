<script setup lang="ts">
import {reactive, ref, watch, watchEffect} from "vue";
import IndexComponent from "@/components/layout/IndexComponent.vue";
import ElComponent from "@/components/ElComponent.vue";

let obj = reactive({
  name: "frank",
  age: 23,
});
let list1 = reactive({
  address: "",
  current: 0,
});
let ret = (obj3: object) => {
  console.log(obj3);
  list1.address = obj3.address;
  list1.current = obj3.current;
}
</script>

<template>
  <div>{{ list1 }}</div>
  <IndexComponent :obj2="obj" @on-click="ret"></IndexComponent>
</template>

<style lang="less">
html,
body,
#app {
  height: 100%;
  overflow: hidden;
}
</style>
