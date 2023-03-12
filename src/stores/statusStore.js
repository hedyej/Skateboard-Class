import { defineStore } from "pinia";

export default defineStore("statusStore", {
  state() {
    return {
      msgs: [],
    };
  },
  actions: {
    pushMsg(status, text) {
      // const msg = { status, text };
      this.msgs.push({ status, text });
      // console.log("狀態", msg);
      console.log("狀態s", this.msgs);
      this.AutoClearMsg();
    },
    AutoClearMsg() {
      setTimeout(() => {
        console.log(this.msgs[0], "shift");
        this.msgs.shift();
      }, 4000);
    },
  },
});
