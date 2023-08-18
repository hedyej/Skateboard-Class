<template>
  <ToastNotification></ToastNotification>
  <div class="bg-grey vh-100 d-flex align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <h1
          class="h1 mb-5 font-weight-normal d-flex justify-content-center align-items-center"
        >
          <img
            class="me-3"
            src="@/assets/img/home/logoBlack.svg"
            style="width: 160px"
          />
          管理員登入
        </h1>
        <div class="col-8">
          <form class="form-signin" @submit.prevent="login">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                v-model="user.username"
                id="floatingInput"
                placeholder="name@example.com"
                required
                autofocus
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                v-model="user.password"
                id="floatingPassword"
                placeholder="Password"
                required
              />
              <label for="floatingPassword">Password</label>
            </div>
            <button
              class="btn btn-lg btn-primary w-100 mt-3"
              type="submit"
              @click="submit"
            >
              登入
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_BASE_URL } = import.meta.env;
import ToastNotification from "../../components/global/ToastNotification.vue";
import statusStore from "../../stores/statusStore";
import { mapActions } from "pinia";

export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  components: {
    ToastNotification,
  },
  methods: {
    ...mapActions(statusStore, ["pushMsg"]),
    submit() {
      this.$http
        .post(`${VITE_BASE_URL}/v2/admin/signin`, this.user)
        .then((res) => {
          if (res.data.success) {
            const { token, expired } = res.data;
            document.cookie = `myToken=${token};expires=${new Date(
              expired
            )}; path=/`;
            this.$router.push("/admin");
          } else {
            this.pushMsg("failed", "登入失敗");
          }
        })
        .catch(() => this.pushMsg("failed", "登入失敗"));
    },
  },
};
</script>
