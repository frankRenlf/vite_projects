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
</script>

<template>
  <div>
    <label for="new-todo">Add a todo</label>
    <input
      ref="ip"
      v-model="newTodoText"
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
