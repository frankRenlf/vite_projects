import { createApp } from "vue";
import { createPinia } from "pinia";
// import "./assets/css/reset.less";

import App from "./App.vue";
import TodoItem from "@/components/TodoItem.vue";

// import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
// app.use(router);

app.mount("#app");
// console.log(app.config);
// app.component("TodoItem", TodoItem);
