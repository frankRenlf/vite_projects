<template>
  <PropsEmits :ps1="obj1" :ps2="obj2" @click1="ret"></PropsEmits>
</template>

<script setup lang="ts">
/*
customRef:
  创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制

需求: 
  使用 customRef 实现 debounce 的示例
*/

import { ref, customRef, isReactive, reactive } from "vue";
import PropsEmits from "@/components/PropsEmits.vue";

const obj1: object = {
  a: 1,
  b: "abc",
};
const obj2: object = {
  a: 2,
  b: "efg",
};
interface Person {
  name: string;
  age: number;
}
let retVal = reactive<Person[]>([]);
console.log(retVal);
const ret = (val: object) => {
  retVal.push(val);
  console.log(retVal);
  console.log(isReactive(retVal));
};
</script>
