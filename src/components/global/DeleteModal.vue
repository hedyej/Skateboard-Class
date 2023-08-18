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
const { VITE_BASE_URL, VITE_API_PATH } = import.meta.env;
import { mapActions } from "pinia";
import cartStore from "../../stores/cartStore";
import { Modal } from "bootstrap";

export default {
  data() {
    return {
      deleteModal: {},
      temp: {
        type: "",
        id: "",
      },
    };
  },
  props: ["getProduct", "getOrder"],
  methods: {
    showModal(type, id) {
      this.deleteModal.show();
      this.temp.type = type;
      this.temp.id = id;
    },
    hideModal() {
      this.deleteModal.hide();
    },
    ...mapActions(cartStore, ["deleteCart", "deleteAllCarts"]),
    deleteType() {
      if (this.temp.type === "allCarts") {
        this.deleteAllCarts();
        this.hideModal();
      } else if (this.temp.type === "oneCart") {
        this.deleteCart(this.temp.id);
        this.hideModal();
      } else if (this.temp.type === "deleteProduct") {
        this.$http
          .delete(
            `${VITE_BASE_URL}v2/api/${VITE_API_PATH}/admin/product/${this.temp.id}`
          )
          .then(() => {
            this.deleteModal.hide();
            this.tempProduct = { imagesUrl: [] };
            this.getProduct();
          })
          .catch((error) => alert(error));
      } else if (this.temp.type === "deleteOrder") {
        this.$http
          .delete(
            `${VITE_BASE_URL}v2/api/${VITE_API_PATH}/admin/order/${this.temp.id}`
          )
          .then(() => {
            this.deleteModal.hide();
            this.getOrder();
          })
          .catch((error) => alert(error));
      }
    },
  },
  mounted() {
    this.deleteModal = new Modal(this.$refs.deleteModal);
  },
};
</script>
