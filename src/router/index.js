import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import QuizView from "../views/QuizView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
        path: "/home",
        redirect: "/",
    },
    {
        path: "/quiz/:id",
        name: "Quiz",
        component: QuizView,
    }
  ],
});

export default router;
