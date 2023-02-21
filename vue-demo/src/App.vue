<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
const uc = useCounterStore();

</script>

<template>
  <ul class="skip-links">
    <li>
      <router-link to="/" ref="skipLink" class="skip-link"
        >Skip to main content</router-link
      >
      <h3>Pinia {{ uc.count }}</h3>
    </li>
  </ul>
  <h2>router-link</h2>
  <router-link to="/AppFetch">AppFetch</router-link>
  <hr />
  <router-link to="/App_transitionGroup1">App_transitionGroup1</router-link>
  <hr />
  <router-link to="/App_transitionGroup2">App_transitionGroup2</router-link>
  <hr />
  <h2>router-view</h2>
  <!--  <router-view></router-view>-->
  <router-view v-slot="{ Component }">
    <transition name="why">
      <keep-alive
        :include="['AppFetch', 'App_transitionGroup1', 'App_transitionGroup2']"
      >
        <component :is="Component"></component>
      </keep-alive>
    </transition>
  </router-view>
</template>

<style>
.skip-link {
  white-space: nowrap;
  top: 0;
  position: fixed;
  left: 50%;
  margin: 1em auto 1em -72px;
  opacity: 0;
}
.skip-link:hover {
  opacity: 1;
  background-color: white;
  padding: 0.5em;
  border: 1px solid black;
}
</style>
