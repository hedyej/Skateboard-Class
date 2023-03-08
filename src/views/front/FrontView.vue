<template>
  <div class="min-vh-100 d-flex flex-column">
    <NavBar />
    <RouterView />
    <TheFooter class="mt-auto"></TheFooter>
  </div>
</template>

<script type="module">
import { RouterView } from "vue-router";
import NavBar from "../../components/global/NavBar.vue";
import TheFooter from "../../components/global/TheFooter.vue";

export default {
  components: {
    NavBar,
    TheFooter,
    RouterView,
  },
};
</script>
