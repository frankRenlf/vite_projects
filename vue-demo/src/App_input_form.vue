<script setup>
import { computed, isRef, onMounted, ref } from "vue";
import TodoItem from "@/components/TodoItem.vue";

const newTodoText = ref("");
const todos = ref([
  {
    id: 1,
    title: "Do the dishes",
  },
  {
    id: 2,
    title: "Take out the trash",
  },
  {
    id: 3,
    title: "Mow the lawn",
  },
]);

let nextTodoId = 4;

function addNewTodo() {
  todos.value.push({
    id: nextTodoId++,
    title: newTodoText.value,
  });
  newTodoText.value = "";
}

const numbers = ref([1, 2, 3, 4, 5]);

const evenNumbers = computed(() => {
  return numbers.value.filter((n) => n % 2 === 0);
});
console.log(numbers.value, isRef(numbers));
console.log(evenNumbers.value, isRef(evenNumbers));
const btn1 = (msg, event) => {
  console.log(event);
};
let ip = ref();
onMounted(() => {
  ip.value.focus();
});
let checked = ref([]);
let picked = ref("One");
let select1 = ref();
let select2 = ref([]);
const options = ref([
  { text: "One", value: "A" },
  { text: "Two", value: "B" },
  { text: "Three", value: "C" },
]);
let toggle = ref(false);
</script>

<template>
  <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
  <div>{{ toggle }}</div>
  <input type="checkbox" v-model="toggle" />
  <div>Selected: {{ select2 }}</div>
  <select v-model="select2" multiple>
    <option v-for="option in options" :value="option.value" :key="option.value">
      {{ option.text }}
    </option>
  </select>

  <div>Selected: {{ select1 }}</div>
  <select name="" id="" v-model="select1">
    <option>a</option>
    <option>b</option>
    <option>c</option>
  </select>

  <div>Picked: {{ picked }}</div>

  <input type="radio" value="One" v-model="picked" />
  <label for="one">One</label>

  <input type="radio" value="Two" v-model="picked" />
  <label for="two">Two</label>
  <h2>{{ checked }}</h2>
  <input type="checkbox" id="checkbox" value="1" v-model="checked" />
  <label for="a">a</label>
  <input type="checkbox" id="checkbox" value="2" v-model="checked" />
  <label for="b">b</label>
  <input type="checkbox" id="checkbox" value="3" v-model="checked" />
  <label for="c">c</label>
  <div>
    <label for="new-todo">Add a todo</label>
    <input
      type="number"
      ref="ip"
      v-model.trim="newTodoText"
      id="new-todo"
      placeholder="E.g. Feed the cat"
      @keyup.enter.prevent="addNewTodo"
    />
    <button @click="addNewTodo">Add</button>
  </div>
  <ul>
    <todo-item
      v-for="(todo, index) in todos"
      :key="todo.id"
      :title="todo.title"
      @remove="todos.splice(index, 1)"
    ></todo-item>
  </ul>
  <button @click="btn1('test', $event)">btn1</button>
</template>
