import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/guards/LoginView.vue";
import Dashboard from "../views/DashboardView.vue";
import Forms from "../views/Forms.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/",
    //   name: "Login",
    //   component: LoginView,
    //   meta: { title: "Zootopia" },
    // },
    // {
    //   path: "/home",
    //   name: "Dashboard",
    //   component: DashboardView,
    //   meta: { title: "Zootopia" },
    // },
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: { layout: 'empty' },
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/forms',
      name: 'Forms',
      component: Forms,
    },
    // {
    //   path: '/cards',
    //   name: 'Cards',
    //   component: Card,
    // },
    // {
    //   path: '/tables',
    //   name: 'Tables',
    //   component: Tables,
    // },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Zootopia";
  next();
});

export default router;
