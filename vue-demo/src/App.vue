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
    checked: false,
    children: [
      {
        name: "no.1-1",
        checked: false,
        children: [
          {
            name: "no.1-1-1",
            checked: true,
          },
        ],
      },
    ],
  },
  {
    name: "no.2",
    checked: false,
    children: [
      {
        name: "no.2-1",
        checked: false,
      },
    ],
  },
  {
    name: "no.3",
    checked: false,
  },
]);
</script>

<template>
  <TreeCom :data="data"></TreeCom>
</template>
