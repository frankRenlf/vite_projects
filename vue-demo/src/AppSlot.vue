<script setup>
import { ref } from "vue";
import BlogPost from "@/components/BlogPost.vue";

const posts = ref([
  { id: 1, title: "My journey with Vue" },
  { id: 2, title: "Blogging with Vue" },
  { id: 3, title: "Why Vue is so fun" },
]);

const postFontSize = ref(1);
</script>

<template>
  <div>
    <BlogPost
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      @enlarge-text="postFontSize += 0.1"
      :style="{ fontSize: postFontSize + 'em' }"
    >
      slot test {{ post.id }}
    </BlogPost>
  </div>
  <hr />
  <table>
    <BlogPost key="44" title="tr"></BlogPost>
    <tr is="vue:BlogPost" key="44" title="tr"></tr>
  </table>
</template>
