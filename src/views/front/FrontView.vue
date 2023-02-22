<template>
  <NavBar />
  <RouterView />
  <Footer></Footer>
</template>

<script type="module">
import { RouterView } from "vue-router";
import NavBar from "../../components/global/NavBar.vue";
import Footer from "../../components/global/Footer.vue";

export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>
