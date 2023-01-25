<template>
  <div>
    <div>
      <MenuComponent></MenuComponent>
    </div>
    <div>
      <ContentComponent></ContentComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from "@/components/layout/HeaderComponent.vue";
import MenuComponent from "@/components/layout/MenuComponent.vue";
import ContentComponent from "@/components/layout/ContentComponent.vue";
</script>

<style scoped lang="less">

</style>