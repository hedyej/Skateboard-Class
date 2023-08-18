import { defineStore } from "pinia";

export default defineStore("statusStore", {
  state() {
    return {
      msgs: [],
      isFulllLoading: false,
    };
  },
  actions: {
    pushMsg(status, text) {
      this.msgs.push({ status, text });
      this.AutoClearMsg();
    },
    AutoClearMsg() {
      setTimeout(() => {
        this.msgs.shift();
      }, 4000);
    },
  },
});
