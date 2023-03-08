<template>
  <div
    class="toast align-items-center position-fixed end-0 m-4"
    role="alert"
    style="z-index: 3000"
    aria-live="assertive"
    aria-atomic="true"
    ref="toast"
  >
    <div class="d-flex">
      <div class="toast-body">{{ msgStatus.status }}</div>
      <button
        type="button"
        class="btn-close me-2 m-auto"
        data-bs-dismiss="toast"
        aria-label="Close"
      ></button>
    </div>
  </div>
</template>

<script>
import { Toast } from "bootstrap";
import { mapState } from "pinia";
import statusStore from "../../stores/statusStore.js";
export default {
  data() {
    return {
      text: "hooo",
      toast: {},
    };
  },
  computed: {
    ...mapState(statusStore, ["msgStatus"]),
  },
  methods: {
    showToast() {
      this.toast.show();
    },
  },
  mounted() {
    console.log(statusStore);
    this.toast = new Toast(this.$refs.toast);
    this.toast.show();
  },
};
</script>
