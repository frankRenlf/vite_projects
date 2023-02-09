<template>
  <div>{{ obj2 }} ------</div>
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
import {reactive} from "vue";

defineProps<{
  obj2: object;
}>();
let obj = reactive({
  address: "hz",
  current: 2023,
})
const emit = defineEmits<{
  (
      e: "on-click",
      obj2: {
        address: string;
        current: number;
      }
  ): void;
}>();
const clickTap = () => {
  emit("on-click", obj);
};
</script>

<style scoped lang="less"></style>
