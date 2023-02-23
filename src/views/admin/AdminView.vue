<template>
  <NavBar></NavBar>
  <RouterView></RouterView>
  <TheFooter></TheFooter>
</template>
<script>
import { RouterView } from "vue-router";
import NavBar from "../../components/global/NavBar.vue";
import TheFooter from "../../components/global/TheFooter.vue";

export default {
  components: { RouterView, NavBar, TheFooter },
};
</script>
