<script setup lang="ts">
import {reactive, ref, watch, watchEffect} from "vue";
import IndexComponent from "@/components/layout/IndexComponent.vue";

let obj = reactive({
  name: "frank",
  age: 23,
});
let list1 = reactive({
  address:'',
});
let ret = (obj2: object) => {
  console.log(obj2);
  list1.address = obj2.address;
}
</script>

<template>
  <div>{{ list1 }}</div>
  <IndexComponent :obj1="obj" @on-click1="ret"></IndexComponent>
</template>

<style lang="less">
html,
body,
#app {
  height: 100%;
  overflow: hidden;
}
</style>
