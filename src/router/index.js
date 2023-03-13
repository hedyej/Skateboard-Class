import { createRouter, createWebHistory } from "vue-router";
//front
import FrontView from "@/views/front/FrontView.vue";
import HomeView from "@/views/front/HomeView.vue";
import CartView from "@/views/front/CartView.vue";
import ClassView from "@/views/front/ClassView.vue";
import ClassDetail from "@/views/front/ClassDetail.vue";
import OrderDone from "@/views/front/OrderDone.vue";
import OrderView from "@/views/front/OrderView.vue";
//admin
import AdminClass from "@/views/admin/AdminClass.vue";
import AdminOrder from "@/views/admin/AdminOrder.vue";
import AdminClassContent from "@/views/admin/AdminClassContent.vue";
// import AdminOrderContent from "@/views/admin/AdminOrderContent.vue";
import AdminView from "@/views/admin/AdminView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //front
    {
      path: "/",
      name: "frontView",
      component: FrontView,
      children: [
        {
          path: "home",
          name: "home",
          component: HomeView,
        },
        {
          path: "class",
          name: "class",
          component: ClassView,
        },
        {
          path: "/class/:id",
          name: "classDetail",
          component: ClassDetail,
        },
        {
          path: "cart",
          name: "cart",
          component: CartView,
        },
        {
          path: "order",
          name: "order",
          component: OrderView,
        },
        {
          path: "orderDone",
          name: "orderDone",
          component: OrderDone,
        },
      ],
    },
    {
      path: "/admin",
      name: "adminView",
      component: AdminView,
      children: [
        {
          path: "adminClass",
          name: "adminClass",
          component: AdminClass,
        },
        {
          path: "adminClass/:id",
          name: "adminClassContent",
          component: AdminClassContent,
        },
        {
          path: "adminOrder",
          name: "adminOrder",
          component: AdminOrder,
        },
      ],
    },
  ],
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
});

// {
//   path: "adminOrder/:id",
//   name: "adminOrderContent",
//   component: AdminOrderContent,
// },

export default router;
