import { createWebHistory, createRouter } from "vue-router";

import Tracking from "../views/Tracking.vue";
import Status from "../views/Status.vue";
import Payment from "../views/Payment.vue";
import Congrats from "../views/Congrats.vue";

const routes = [
  { path: "/status", component: Tracking },
  { path: "/payment", component: Payment },
  { path: "/", component: Status },
  { path: "/done", component: Congrats },
];

const router = createRouter({
  history: createWebHistory("delivery-failure"),
  routes,
});

// console.log("history", router.history);
export default router;
