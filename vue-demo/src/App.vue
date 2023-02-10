<template>
  <h2>App</h2>
  <h3>foo: {{ stateAsRefs.foo }}</h3>
  <h3>bar: {{ stateAsRefs.bar }}</h3>
  <h3>foo2: {{ foo }}</h3>
  <h3>bar2: {{ bar }}</h3>
  <input type="text" ref="ip">
  <text-one></text-one>
</template>

<script setup lang="ts">
import {onMounted, provide, reactive, ref, toRefs} from "vue";
import TextOne from "@/components/TextOne.vue";
/*
toRefs:
  将响应式对象中所有属性包装为ref对象, 并返回包含这些ref对象的普通对象
  应用: 当从合成函数返回响应式对象时，toRefs 非常有用，
        这样消费组件就可以在不丢失响应式的情况下对返回的对象进行分解使用
*/
const ip = ref<HTMLElement>();

onMounted(() => {
  ip.value && ip.value.focus()
})
const state = reactive({
  foo: "a",
  bar: "b",
});
provide("test1", "from app");
const stateAsRefs = toRefs(state);

setTimeout(() => {
  state.foo += "++";
  state.bar += "++";
}, 2000);

const {foo, bar} = useReatureX();

function useReatureX() {


  setTimeout(() => {
    state.foo += "++";
    state.bar += "++";
  }, 2000);

  return toRefs(state);
}
</script>
