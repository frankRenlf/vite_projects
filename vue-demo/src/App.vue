<template>
  <PropsEmits :ps1="obj1" :ps2="obj2" @click1="ret" ref="pe"></PropsEmits>
  <hr />
  <DirectTest v-move:test.a="{ background: value }"></DirectTest>
</template>

<script setup lang="ts">
/*
customRef:
  创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制

需求: 
  使用 customRef 实现 debounce 的示例
*/

import {
  ref,
  customRef,
  isReactive,
  reactive,
  onMounted,
  inject,
  provide,
  Directive,
  DirectiveBinding,
  nextTick,
} from "vue";
import PropsEmits from "@/components/PropsEmits.vue";
import { Person } from "@/stores/Person";
import DirectTest from "@/components/DirectTest.vue";

const obj1: object = {
  a: 1,
  b: "abc",
};
const obj2: object = {
  a: 2,
  b: "efg",
};

let retVal = reactive<Person<string>[]>([]);
console.log(retVal);
const ret = (val: Person<string>) => {
  retVal.push(val);
  retVal.push(val);
  console.log(retVal);
  console.log(isReactive(retVal));
};
let pe = ref<InstanceType<typeof PropsEmits>>();
onMounted(() => {
  console.log("onMounted", pe.value.list);
});
nextTick(() => {
  console.log("nextTick", pe.value.list);
});
let p1 = reactive<Person<number>>(new Person("lily", 11, 22));
provide<Person<number>>("p1", p1);
// p1.name = "lily2";
let value = ref<string>("");
type Dir = {
  background: string;
};
const vMove: Directive = (el, binding) => {
  // el.style.background = binding.value.background;
  console.log(binding.value);
};
</script>
