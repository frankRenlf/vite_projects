<template>
  <h3>{{ obtain.ps1 }}</h3>
  <h3>{{ obtain.ps2 }}</h3>
  <button @click="method1">emits1</button>
</template>

<script setup lang="ts">
import { Person } from "@/stores/Person";
import { inject, reactive } from "vue";

let obtain = defineProps<{
  ps1: object;
  ps2: object;
}>();
const emits1 = defineEmits<{
  (e: "click1", objChild1: Person<string>): void;
}>();
let objChild1: Person<string> = {
  name: "frank",
  age: 23,
};
const method1 = () => {
  emits1("click1", objChild1);
};
const list = reactive<number[]>([4, 5, 6]);
defineExpose({
  list,
});
let p_1: Person<number> = inject<Person<number>>(
  "p1",
  new Person<number>("null", 0, 0)
);
console.log(p_1);
// p_1=1
p_1.name = "child change";
console.log(p_1);
</script>

<style scoped></style>
