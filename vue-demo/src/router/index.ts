import { createRouter, createWebHistory } from "vue-router";
import AppFetch from "@/AppFetch.vue";
import SlotCom from "@/components/SlotCom.vue";
import PiniaTest from "@/components/PiniaTest.vue";
import App from "@/App.vue";
import App_transitionGroup2 from "@/App_transitionGroup2.vue";
import App_reduce from "@/App_reduce.vue";
import App_transitionGroup1 from "@/App_transitionGroup1.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: App_reduce,
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
      path: "/App_transitionGroup1",
      name: "App_transitionGroup1",
      component: App_transitionGroup1,
    },
    {
      path: "/App_transitionGroup2",
      name: "App_transitionGroup2",
      component: App_transitionGroup2,
    },
  ],
});

export default router;
