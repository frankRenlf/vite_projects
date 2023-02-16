import { createRouter, createWebHistory } from "vue-router";
import AppFetch from "@/AppFetch.vue";
import SlotCom from "@/components/SlotCom.vue";
import PiniaTest from "@/components/PiniaTest.vue";
import App from "@/App.vue";
import App_transitionGroup2 from "@/App_transitionGroup2.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: App,
    },
    {
      path: "/AppFetch",
      name: "AppFetch",
      component: AppFetch,
      children: [
        {
          path: "/PiniaTest",
          name: "PiniaTest",
          component: PiniaTest,
        },
      ],
    },
    {
      path: "/App_transitionGroup2",
      name: "App_transitionGroup2",
      component: App_transitionGroup2,
    }
  ],
});

export default router;
