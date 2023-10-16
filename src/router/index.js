import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "@/components/HomeComponent.vue";

const routes = [
  {
    path: "/en",
    component: HomeComponent,
  },
  {
    path: "/",
    name: "default",
    component: HomeComponent,
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
