<script setup lang="ts">
import { reactive, ref, watch, watchEffect } from "vue";

let msg1 = ref<string>("abc");
let msg2 = ref<number>(2);
let obj = reactive({
  a: {
    b: {
      c: 10,
    },
  },
});
// watch(
//   [msg1, msg2],
//   (newVal, oldVal) => {
//     console.log(newVal, oldVal);
//   },
//   {
//     deep: true,
//     flush: "pre",
//   }
// );
watchEffect(
  (onCleanup) => {
    onCleanup(() => {
      console.log("a");
    });
    console.log(obj.a.b.c);
  },
  {
    flush: "post",
    onTrigger(e) {
      debugger;
    },
  }
);
</script>

<template>
  <div>
    case1:<input type="text" v-model="obj.a.b.c" />
    <hr />
    case2:<input type="text" v-model="msg2" />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
