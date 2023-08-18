<template>
  <div class="bg-dark">
    <div class="container-xxl">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
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
          <RouterLink :to="{ name: 'adminView' }" class="nav-link active">
            <img src="@/assets/img/home/logo.svg" />
          </RouterLink>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <RouterLink :to="{ name: 'adminClass' }" class="nav-link active"
                  >課程管理</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink :to="{ name: 'adminOrder' }" class="nav-link active"
                  >訂單管理</RouterLink
                >
              </li>
            </ul>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-light dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <font-awesome-icon class="me-2" :icon="['fas', 'user']" />
                <span> 管理員 </span>
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" @click="logout">登出</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
const { VITE_BASE_URL } = import.meta.env;

export default {
  methods: {
    logout() {
      this.$http.post(`${VITE_BASE_URL}v2/logout`).then(() => {
        this.$router.push("/adminLogin");
      });
    },
  },
};
</script>
