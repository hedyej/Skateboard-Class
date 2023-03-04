import { defineStore } from "pinia";
import axios from "axios";
const { VITE_BASE_URL, VITE_API_PATH } = import.meta.env;

export default defineStore("cartStore", {
  state() {
    return {
      carts: {},
      final_total: "",
      total: "",
    };
  },
  actions: {
    getCart() {
      axios
        .get(`${VITE_BASE_URL}v2/api/${VITE_API_PATH}/cart`)
        .then((res) => {
          this.carts = res.data.data.carts;
          this.final_total = res.data.data.final_total;
          this.total = res.data.data.total;
          console.log("購物車內容", this.carts);
        })
        .catch((err) => console.log(err));
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
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
    deleteCart(cartId) {
      alert("確定要刪除嗎");
      axios
        .delete(`${VITE_BASE_URL}v2/api/${VITE_API_PATH}/cart/${cartId}`)
        .then(() => {
          this.getCart();
        })
        .catch((err) => console.log(err));
    },
    deleteAllCarts() {
      alert("確定要刪除嗎");
      axios
        .delete(`${VITE_BASE_URL}v2/api/${VITE_API_PATH}/carts`)
        .then(() => {
          this.getCart();
        })
        .catch((err) => console.log(err));
    },
  },
});
