<script setup>
defineProps(["title"]);
defineEmits(["enlarge-text"]);
</script>

<template>
  <div class="blog-post">
    <h4>{{ title }}</h4>
    <slot />
    <button @click="$emit('enlarge-text')">Enlarge text</button>
  </div>
</template>
