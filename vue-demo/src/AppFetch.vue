<script setup lang="ts">
import { ref, watchEffect } from "vue";

const API_URL = `https://api.github.com/repos/vuejs/core/commits?per_page=3&sha=`;
const branches = ["main", "v2-compat"];

const currentBranch = ref(branches[0]);
const commits = ref(null);
watchEffect(async () => {
  // 该 effect 会立即运行，
  // 并且在 currentBranch.value 改变时重新运行
  const url = `${API_URL}${currentBranch.value}`;
  commits.value = await (await fetch(url)).json();
  /* second fetch method
    commits.value = JSON.parse(
    await fetch(url).then(function (data) {
      // text()方法属于fetchAPI的一部分，它返回一个Promise实例对象，
      // 用于获取后台返回的数据 return data.text();
      return data.text();
    })
  );
   */
});

function truncate(v: any) {
  const newline = v.indexOf("\n");
  return newline > 0 ? v.slice(0, newline) : v;
}

function formatDate(v: any) {
  return v.replace(/[TZ]/g, " ");
}
</script>

<template>
  <router-link to="/PiniaTest">PiniaTest</router-link>
  <router-view></router-view>
  <h1>Latest Vue Core Commits</h1>
  <template v-for="branch in branches" :key="branch">
    <input
      type="radio"
      :id="branch"
      :value="branch"
      name="branch"
      v-model="currentBranch"
    />
    <label :for="branch">{{ branch }}</label>
  </template>
  <p>vuejs/vue@{{ currentBranch }}</p>
  <ul>
    <li v-for="{ html_url, sha, author, commit } in commits" :key="author">
      <a :href="html_url" target="_blank" class="commit">{{
        sha.slice(0, 7)
      }}</a>
      - <span class="message">{{ truncate(commit.message) }}</span
      ><br />
      by
      <span class="author">
        <a :href="author.html_url" target="_blank">{{ commit.author.name }}</a>
      </span>
      at <span class="date">{{ formatDate(commit.author.date) }}</span>
    </li>
  </ul>
</template>

<style>
a {
  text-decoration: none;
  color: #42b883;
}
li {
  line-height: 1.5em;
  margin-bottom: 20px;
}
.author,
.date {
  font-weight: bold;
}
</style>
