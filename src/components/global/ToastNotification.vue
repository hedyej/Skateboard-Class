<template>
  <div class="toast-container">
    <div
      class="toast align-items-center"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="d-flex" v-for="(msg, i) in msgs" :key="i + msg">
        <div class="toast-body">{{ msg.text }}</div>
        <button
          type="button"
          class="btn-close me-2 m-auto"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
import statusStore from "../../stores/statusStore";
import { mapState } from "pinia";
export default {
  computed: {
    ...mapState(statusStore, ["msgs"]),
  },
};
</script>
<!-- const msg = { status: status, text: text }; -->
