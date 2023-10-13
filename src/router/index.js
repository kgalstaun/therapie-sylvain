import { createRouter, createWebHistory } from "vue-router";
import MainComponent from "@/components/MainComponent";

const routes = [
  {
    path: "/en",
    component: MainComponent,
  },
  {
    path: "/",
    name: "default",
    component: MainComponent,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
