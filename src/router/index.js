import { createRouter, createWebHistory } from "vue-router";
import FrontView from "@/views/front/FrontView.vue"
import HomeView from "@/views/front/HomeView.vue";
import CartView from "@/views/front/CartView.vue";
import ClassView from "@/views/front/ClassView.vue";
import ClassDetail from "@/views/front/ClassDetail.vue";
import OrderDone from "@/views/front/OrderDone.vue";
import OrderView from "@/views/front/OrderView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "frontView",
      component: FrontView,
      children:[
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
          path: "/cart",
          name: "cart",
          component: CartView,
        },
        {
          path: "/order",
          name: "order",
          component: OrderView,
        },
        {
          path: "/orderDone",
          name: "orderDone",
          component: OrderDone,
        },
      ]
    },
  ],
});

export default router;
