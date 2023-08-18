<template>
  <div class="toast-container position-fixed z-index-3000 toast-center">
    <div
      class="toast show mb-2"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      v-for="(msg, i) in msgs"
      :key="i + msg"
    >
      <div class="d-flex align-items-center">
        <font-awesome-icon
          v-if="msg.status === 'success'"
          class="ms-2 text-success fs-5"
          :icon="['fas', 'circle-check']"
        />
        <font-awesome-icon
          v-else
          class="ms-2 text-danger fs-5"
          :icon="['fas', 'circle-xmark']"
        />
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
