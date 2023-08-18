import { defineStore } from "pinia";
import statusStore from "./statusStore";
import axios from "axios";

const { VITE_BASE_URL, VITE_API_PATH } = import.meta.env;

export default defineStore("cartStore", {
  state() {
    return {
      carts: [],
      final_total: "",
      total: "",
      isLoading: false,
    };
  },
  actions: {
    addCart(productId, qty = 1) {
      const data = {
        product_id: productId,
        qty,
      };
      axios
        .post(`${VITE_BASE_URL}v2/api/${VITE_API_PATH}/cart`, { data })
        .then(() => {
          const status = statusStore();
          status.isBounced = true;
          status.pushMsg("success", "新增成功");
          this.isLoading = false;
          this.getCart();
        })
        .catch(() => {
          const status = statusStore();
          status.isBounced = true;
          status.pushMsg("failed", "新增失敗");
          this.isLoading = false;
        });
    },
    getCart() {
      axios
        .get(`${VITE_BASE_URL}v2/api/${VITE_API_PATH}/cart`)
        .then((res) => {
          this.carts = res.data.data.carts;
          this.final_total = res.data.data.final_total;
          this.total = res.data.data.total;
        })
        .catch(() => {
          const status = statusStore();
          status.isBounced = true;
          status.pushMsg("failed", "請重新整理");
        });
    },
    editCart(cartId, productId, qty) {
      const data = {
        data: {
          product_id: productId,
          qty: qty,
        },
      };
      axios
        .put(`${VITE_BASE_URL}v2/api/${VITE_API_PATH}/cart/${cartId}`, data)
        .then(() => this.getCart())
        .catch(() => {
          const status = statusStore();
          status.isBounced = true;
          status.pushMsg("failed", "更新失敗");
        });
    },
    deleteCart(cartId) {
      axios
        .delete(`${VITE_BASE_URL}v2/api/${VITE_API_PATH}/cart/${cartId}`)
        .then(() => {
          const status = statusStore();
          status.isBounced = true;
          status.pushMsg("success", "刪除成功");
          this.getCart();
        })
        .catch(() => {
          const status = statusStore();
          status.isBounced = true;
          status.pushMsg("failed", "刪除失敗");
        });
    },
    deleteAllCarts() {
      axios
        .delete(`${VITE_BASE_URL}v2/api/${VITE_API_PATH}/carts`)
        .then(() => {
          this.getCart();
          const status = statusStore();
          status.isBounced = true;
          status.pushMsg("success", "刪除成功");
        })
        .catch(() => {
          const status = statusStore();
          status.isBounced = true;
          status.pushMsg("failed", "刪除失敗");
        });
    },
    setLoadingTrue() {
      this.isLoading = true;
    },
  },
});
