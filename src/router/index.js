import { createRouter, createWebHashHistory } from "vue-router";

//front
import FrontView from "@/views/front/FrontView.vue";
import HomeView from "@/views/front/HomeView.vue";
import CartView from "@/views/front/CartView.vue";
import ClassView from "@/views/front/ClassView.vue";
import ClassDetail from "@/views/front/ClassDetail.vue";
import OrderDone from "@/views/front/OrderDone.vue";
import OrderView from "@/views/front/OrderView.vue";
import ErrorView from "@/views/front/ErrorView.vue";

//admin
import AdminClass from "@/views/admin/AdminClass.vue";
import AdminOrder from "@/views/admin/AdminOrder.vue";
import AdminView from "@/views/admin/AdminView.vue";
import AdminLogin from "@/views/admin/AdminLogin.vue";
import statusStore from "@/stores/statusStore";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    //front
    {
      path: "/",
      name: "frontView",
      component: FrontView,
      redirect: { name: "home" },
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
        { path: "/:pathMatch(.*)*", name: "error-view", component: ErrorView },
      ],
    },
    //admin login
    {
      path: "/adminLogin",
      name: "adminLogin",
      component: AdminLogin,
    },
    //admin
    {
      path: "/admin",
      name: "adminView",
      component: AdminView,
      redirect: { name: "adminClass" },
      children: [
        {
          path: "adminClass",
          name: "adminClass",
          component: AdminClass,
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
    return { top: 0 };
  },
});

router.beforeEach(() => {
  const status = statusStore();
  status.isFullLoading = true;
});

router.afterEach(() => {
  const status = statusStore();
  status.isFullLoading = false;
});

export default router;
