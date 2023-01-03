<script setup lang="ts">
import {customRef, reactive, ref, Ref} from "vue";

let a = ref(5);
let b = ref('s');
let c:Ref<string>=ref('ssss');
const arr = reactive([
  {'id': 1, 'gender': 'male'},
  {'id': 2, 'gender': 'female'},
]);
const del = () => {
  a.value--;
};
function myRef<T>(value:T){
  let timer:number;
  return customRef((track, trigger)=>{
    return {
      get() {
        track()
        return value
      },
      set(newVal) {
        clearTimeout(timer)
        timer =  setTimeout(() => {
          console.log('触发了set')
          value = newVal
          trigger()
        },500)
      }
    }
  })
}
let x=myRef<string>('x');
function change(){
  x.value='y';
}
</script>

<template>
  <div>
    <h2>{{x}}</h2>
    <input type="text" v-model="b">
    <h2>{{ b }}</h2>
    <h1 v-show="a">{{ a }}</h1>
    <button @click="del">del</button>
    <button @click="change">change</button>
  </div>
  <div>
    <div v-for="a in arr" :key="a.id">{{ a }}</div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

