<!--
该示例创建了一个可复用网格组件，并结合外部数据使用它。
-->

<script setup lang="ts">
import { reactive } from "vue";
import { TreeList } from "@/stores/TreeList";
import TreeCom from "./components/TreeCom.vue";

const data = reactive<TreeList[]>([
  {
    name: "no.1",
    children: [
      {
        name: "no.1-1",
        children: [
          {
            name: "no.1-1-1",
          },
        ],
      },
    ],
  },
  {
    name: "no.2",
    children: [
      {
        name: "no.2-1",
      },
    ],
  },
  {
    name: "no.3",
  },
]);
</script>

<template>
  <TreeCom :data="data"></TreeCom>
</template>
