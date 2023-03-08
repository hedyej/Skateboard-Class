import { defineStore } from "pinia";

export default defineStore("cartStore", {
  state() {
    return {
      msgStatus: {
        status: "笑死",
        msg: "",
      },
    };
  },
});
