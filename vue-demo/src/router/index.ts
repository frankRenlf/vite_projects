import { createRouter, createWebHistory } from "vue-router";
import ElComponent from "@/components/ElComponent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/el",
      name: "el",
      component: ElComponent,
    },
  ],
});

export default router;
