<template>
<h1>TextOne  ----  {{pro}}</h1>
</template>

<script setup lang="ts">

import {inject} from "vue";

let pro = inject("test1");
</script>

<style scoped>

</style>