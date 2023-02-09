<template>
  <div>{{ obj1 }} ------</div>
  <button @click="clickTap">emit</button>
  <div>
    <div>
      <MenuComponent></MenuComponent>
    </div>
    <div>
      <HeaderComponent></HeaderComponent>
      <ContentComponent></ContentComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from "@/components/layout/HeaderComponent.vue";
import MenuComponent from "@/components/layout/MenuComponent.vue";
import ContentComponent from "@/components/layout/ContentComponent.vue";
import { reactive } from "vue";

defineProps<{
  obj1: object;
}>();
// const emit = defineEmits<{
//   (
//     e: "on-click",
//     obj2: {
//       address: "hz";
//       current: "2023";
//     }
//   ): void;
// }>();
let obj2 = reactive({
  address: "hz",
  current: "2023",
});
const emit = defineEmits(["on-click1"]);
const clickTap = () => {
  emit("on-click1", obj2);
};
</script>

<style scoped lang="less"></style>
