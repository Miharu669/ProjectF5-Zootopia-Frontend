import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/guards/LoginView.vue";
import Dashboard from "../views/DashboardView.vue";
import Forms from "../views/Forms.vue"
import RegisterForm from "../components/auth/RegisterForm.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: { layout: 'empty', requiresAuth: false },
    },
    // {
    //   path: '/register',
    //   name: 'Register',
    //   component: RegisterForm,
    //   meta: { layout: 'empty' },
    // },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: { requiresAuth: true, role: 'ROLE_ADMIN' },
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
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const roles = JSON.parse(localStorage.getItem('roles') || "[]");

  // Debugging logs
  console.log(`Navigating to ${to.path}`);
  console.log(`Requires auth: ${requiresAuth}`);
  console.log(`User roles: ${roles}`);

  if (requiresAuth && roles.length === 0) {
    next('/'); // Redirect to login if not authenticated
  } else if (to.path === '/' && roles.length > 0) {
    next('/dashboard'); // Redirect to dashboard if already authenticated
  } else if (requiresAuth && !roles.includes('ROLE_ADMIN')) {
    next('/'); // Redirect to login if role is not ADMIN
  } else {
    next(); // Allow access if all checks are passed
  }
});
export default router;
