import { createApp } from "vue";
import { createPinia } from "pinia";
// import "./assets/css/reset.less";

import App from "./App.vue";
import i18n from "@/plugin/i18n";
// import "./assets/main.css";

const app = createApp(App);
app.use(i18n, {
  greetings: {
    hello: "Bonjourxxxxxxxxxx!",
    hi: "what's up",
  },
});
app.use(createPinia());
// app.use(router);
// app.component("TodoItem", TodoItem);
app.mount("#app");

// console.log(app.config);
