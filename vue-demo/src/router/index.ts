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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: copy_ori,
    },
  ],
});

export default router;
