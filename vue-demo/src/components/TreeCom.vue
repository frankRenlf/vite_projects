<template>
  <div
    @click.stop="clickTap(item, $event)"
    class="tree"
    v-for="item in data"
    :key="item.name"
  >
    <input type="checkbox" v-model="item.checked" name="" id="" /><span>{{
      item.name
    }}</span>
    <TreeCom v-if="item?.children?.length" :data="item.children"></TreeCom>
  </div>
</template>

<script setup lang="ts">
import { TreeList } from "@/stores/TreeList";

defineProps<{
  data: TreeList;
}>();
const clickTap = (item: TreeList, event: any) => {
  console.log(item, event.target.innerHTML);
};
</script>

<style scoped>
.tree {
  margin-left: 10px;
}
</style>
