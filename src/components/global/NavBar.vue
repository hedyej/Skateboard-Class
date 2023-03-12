<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-primary border-dark position-fixed w-100"
      style="margin-bottom: -76px"
    >
      <div class="container">
        <RouterLink :to="{ name: 'home' }" class="nav-link active">
          <img src="@/assets/logo.svg" />
        </RouterLink>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item mx-3">
            <RouterLink :to="{ name: 'class' }" class="nav-link active"
              >滑板課程</RouterLink
            >
          </li>
        </ul>

        <RouterLink :to="{ name: 'cart' }">
          <div class="position-relative text-white me-3 cursor-pointer">
            <font-awesome-icon
              :icon="['fas', 'cart-shopping']"
            ></font-awesome-icon>
            <span
              class="py-1 px-1 badge bg-danger rounded position-absolute top-0 start-100 translate-middle"
              >{{ carts.length }}</span
            >
          </div>
        </RouterLink>
        <button type="button" class="btn btn-outline-light mx-3">
          <font-awesome-icon class="me-2" :icon="['fas', 'user']" />
          <span> 管理員登入 </span>
        </button>
      </div>
    </nav>
  </div>

  <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-xxl">
            <a class="navbar-brand" href="#">
                <img src="@/assets/logo.svg">
            </a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item mx-3">
                <a class="nav-link active" aria-current="page" href="#">儀表板</a>
                </li>
                <li class="nav-item mx-3">
                <a class="nav-link active" aria-current="page" href="#">課程管理</a>
                </li>
                <li class="nav-item mx-3">
                <a class="nav-link active" aria-current="page" href="#">訂單管理</a>
                </li>
            </ul>
            <a href="" class="text-white me-4">
                <font-awesome-icon :icon="['fas', 'cart-shopping']" />
            </a>
            <div class="btn-group">
                <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <font-awesome-icon class="me-2" :icon="['fas', 'user']" />
                    <span>
                        管理員
                    </span>
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">登出</a></li>
                </ul>
                </div>
        </div>
    </nav> -->
</template>

<script>
import { mapState, mapActions } from "pinia";
import { RouterLink } from "vue-router";
import cartStore from "../../stores/cartStore";
export default {
  computed: {
    ...mapState(cartStore, ["carts"]),
  },
  components: {
    RouterLink,
  },
  methods: {
    ...mapActions(cartStore, ["getCart"]),
  },
  mounted() {
    this.getCart();
    console.log("內容", this.qty);
  },
};
</script>
