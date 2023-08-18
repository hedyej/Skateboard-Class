<template>
  <div class="min-vh-100 d-flex flex-column">
    <NavBar />
    <ToastNotification />
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import NavBar from "../../components/admin/NabBar.vue";
import ToastNotification from "../../components/global/ToastNotification.vue";
const { VITE_BASE_URL } = import.meta.env;

export default {
  components: {
    RouterView,
    NavBar,
    ToastNotification,
  },
  mounted() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    if (token) {
      this.$http.defaults.headers.common.Authorization = token;
      this.$http.post(`${VITE_BASE_URL}v2/api/user/check`).catch(() => {
        this.$router.push("/adminLogin");
      });
    } else {
      this.$router.push("/adminLogin");
    }
  },
};
</script>
