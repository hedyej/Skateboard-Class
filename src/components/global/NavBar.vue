<template>
  <div class="bg-dark">
    <div class="container-xxl">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
          <RouterLink :to="{ name: 'home' }" class="nav-link active">
            <img src="@/assets/img/home/logo.svg" />
          </RouterLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <RouterLink :to="{ name: 'class' }" class="nav-link active ms-3"
                  >滑板課程</RouterLink
                >
              </li>
              <li class="nav-item d-lg-none">
                <RouterLink :to="{ name: 'cart' }" class="nav-link active ms-3"
                  >我的購物車
                  <span
                    v-if="carts.length"
                    class="d-inline-block py-1 px-1 badge bg-danger rounded"
                    >{{ carts.length }}</span
                  ></RouterLink
                >
              </li>
            </ul>
            <RouterLink :to="{ name: 'cart' }" class="d-lg-block d-none">
              <div class="position-relative text-white me-3 cursor-pointer">
                <font-awesome-icon
                  :icon="['fas', 'cart-shopping']"
                ></font-awesome-icon>
                <span
                  v-if="carts.length"
                  class="py-1 px-1 badge bg-danger rounded position-absolute top-0 start-100 translate-middle"
                  >{{ carts.length }}</span
                >
              </div>
            </RouterLink>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import cartStore from "../../stores/cartStore";

export default {
  computed: {
    ...mapState(cartStore, ["carts"]),
  },
  methods: {
    ...mapActions(cartStore, ["getCart"]),
  },
  mounted() {
    this.getCart();
  },
};
</script>
