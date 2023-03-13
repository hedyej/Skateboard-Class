import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

// //匯入 vee-validate 主套件
// import { Field, Form, ErrorMessage, defineRule, configure } from "vee-validate";
// //匯入全部規則：
// import AllRules from "@vee-validate/rules";
// //匯入多國語系的功能
// import { localize, setLocale } from "@vee-validate/i18n";
// //匯入繁體中文語系檔案
// import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";

// //定義驗證規則
// defineRule("required", required);
// defineRule("email", email);
// defineRule("min", min);
// //匯入全部規則
// Object.keys(AllRules).forEach((rule) => {
//   defineRule(rule, AllRules[rule]);
// });
// //設定 vee-validate 全域規則
// configure({
//   generateMessage: localize({ zh_TW: zhTW }), //載入繁體中文語系
//   validateOnInput: true, //當輸入任何內容直接進行驗證
// });
// //設定預設語系
// setLocale("zh_TW");

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faLine } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

library.add(
  faLine,
  faYoutube,
  faCartShopping,
  faUser,
  faTrashCan,
  faPen,
  faArrowLeft,
  faPlus,
  faMinus,
  faCircleCheck,
  faCircleXmark
);

import "./assets/all.scss";
import "bootstrap";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("Loading", Loading);

// app.component("Form", Form);
// app.component("Field", Field);
// app.component("ErrorMessage", ErrorMessage);

app.mount("#app");
