import { defineStore } from "pinia";

export default defineStore("statusStore", {
  state() {
    return {
      msgStatus: {
        status: "",
        msg: "",
      },
    };
  },
  actions: {
    updateStatus(status, msg) {
      console.log("~~~~~~~", status, msg);
      this.msgStatus.status = status;
      this.msgStatus.msg = msg;
    },
  },
});
