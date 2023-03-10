<template>
  <div class="min-vh-100 d-flex flex-column">
    <NavBar />
    <ToastNotification />
    <RouterView />
    <TheFooter class="mt-auto" />
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import NavBar from "../../components/global/NavBar.vue";
import TheFooter from "../../components/global/TheFooter.vue";
import ToastNotification from "../../components/global/ToastNotification.vue";

export default {
  components: {
    NavBar,
    TheFooter,
    RouterView,
    ToastNotification,
  },
};
</script>
