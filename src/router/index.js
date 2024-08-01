import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/guards/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login",
      component: LoginView,
      meta: { title: "Zootopia" },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "SupportApp";
  next();
});

export default router;
