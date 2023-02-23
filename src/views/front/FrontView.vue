<template>
  <NavBar />
  <RouterView />
  <TheFooter></TheFooter>
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
