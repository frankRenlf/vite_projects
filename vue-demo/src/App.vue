<!--
该示例创建了一个可复用网格组件，并结合外部数据使用它。
-->

<script setup>
import GridCom from "@/components/GridCom.vue";
import { ref } from "vue";

const searchQuery = ref("");
const gridColumns = ["name", "power"];
const gridData = [
  { name: "Chuck Norris", power: Infinity },
  { name: "Bruce Lee", power: 9000 },
  { name: "Jackie Chan", power: 7000 },
  { name: "Jet Li", power: 8000 },
];
</script>

<template>
  <form id="search">Search <input name="query" v-model="searchQuery" /></form>
  <GridCom :data="gridData" :columns="gridColumns" :filter-key="searchQuery">
  </GridCom>
</template>
