<template>
<!--  <div>{{ obj2 }} &#45;&#45;&#45;&#45;&#45;&#45;</div>-->
<!--  <button @click="clickTap">emit</button>-->
<!--  <div>-->
<!--    <div>-->
<!--      <MenuComponent></MenuComponent>-->
<!--    </div>-->
<!--    <div>-->
<!--      <HeaderComponent></HeaderComponent>-->
<!--      <ContentComponent></ContentComponent>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script setup lang="ts">
import HeaderComponent from "@/components/layout/HeaderComponent.vue";
import MenuComponent from "@/components/layout/MenuComponent.vue";
import ContentComponent from "@/components/layout/ContentComponent.vue";
import {reactive} from "vue";
const ex = reactive({
  a: 'a',
  b: 'b'
})

defineExpose({
  ret: () => {
    return ex
  },
  name: 'abc'
})
</script>

<style scoped lang="less"></style>
