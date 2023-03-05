<template>
  <div class="modal" tabindex="-1" ref="deleteModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            <slot name="header">確認刪除</slot>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>
            <slot name="body"> 您確定要刪除嗎？ </slot>
          </p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="deleteType()">
            刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import cartStore from "../../stores/cartStore";
import { Modal } from "bootstrap";
export default {
  data() {
    return {
      deleteModal: {},
      temp: {
        type: "",
        cartId: "",
      },
    };
  },
  methods: {
    showModal(type, cartId) {
      this.deleteModal.show();
      this.temp.type = type;
      this.temp.cartId = cartId;
    },
    hideModal() {
      this.deleteModal.hide();
    },
    ...mapActions(cartStore, ["deleteCart", "deleteAllCarts"]),
    deleteType() {
      console.log(this.temp);
      if (this.temp.type === "all") {
        this.deleteAllCarts();
        this.hideModal();
      } else {
        this.deleteCart(this.temp.cartId);
        this.hideModal();
      }
    },
  },
  mounted() {
    this.deleteModal = new Modal(this.$refs.deleteModal);
  },
};
</script>
