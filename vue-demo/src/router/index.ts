import { createRouter, createWebHistory } from "vue-router";
import ShopComponent from "@/views/computed/ShopComponent.vue";
import copy_ori from "@/views/copy_ori.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/shop",
      name: "home",
      component: ShopComponent,
    },
    {
      path: "/about",
      name: "about",
      component: copy_ori,
    },
  ],
});

export default router;
