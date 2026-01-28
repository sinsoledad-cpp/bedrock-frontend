import { createRouter, createWebHistory } from "vue-router";

const Login = () => import("../views/auth/Login.vue");
const Register = () => import("../views/auth/Register.vue");
const ForgotPassword = () => import("../views/auth/ForgotPassword.vue");
const LandingPage = () => import("../views/LandingPage.vue");

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
