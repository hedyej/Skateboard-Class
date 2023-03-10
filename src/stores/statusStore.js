import { defineStore } from "pinia";

export default defineStore("statusStore", {
  state() {
    return {
      msgs: [],
    };
  },
  actions: {
    pushMsg(status, text) {
      const msg = { status: status, text: text };
      this.msgs.push(msg);
      this.AutoClearMsg();
    },
    AutoClearMsg() {
      setTimeout(this.msgs.shift(), 2000);
    },
  },
});
