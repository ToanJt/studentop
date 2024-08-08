import { createRouter, createWebHistory } from "vue-router";
import StudentList from "@/views/StudentList.vue";
import StudentProfile from "@/views/StudentProfile.vue";
import Home from "@/views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/student-list",
    //   name: "student-list",
    //   children: [
    //     {
    //       path: "",
    //       component: StudentList,
    //     },
    //     {
    //       path: "student/:id",
    //       component: StudentProfile,
    //     },
    //   ],
    // },
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/student-list",
      name: "student-list",
      component: StudentList,
    },
    {
      path: "/student/:id",
      name: "student",
      component: StudentProfile,
      children: [],
    },
  ],
});

export default router;
