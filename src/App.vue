<template>
  <VLoading
    v-model:active="isFullLoading"
    :is-full-page="true"
    :can-cancel="false"
    :on-cancel="false"
    :opacity="0"
  >
  </VLoading>
  <RouterView />
</template>

<script>
import { RouterView } from "vue-router";
import statusStore from "@/stores/statusStore";
import { mapState } from "pinia";

export default {
  components: {
    RouterView,
  },
  computed: {
    ...mapState(statusStore, ["isFullLoading"]),
  },
};
</script>
