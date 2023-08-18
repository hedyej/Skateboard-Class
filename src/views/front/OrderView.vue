<template>
  <div class="bg-grey pb-4 flex-grow-1">
    <div class="container">
      <RouterLink
        type="button"
        class="btn btn-outline-dark border-0 my-3"
        :to="{ name: 'cart' }"
      >
        <font-awesome-icon class="me-2" :icon="['fas', 'arrow-left']" />
        回到購物車
      </RouterLink>

      <div class="bg-white p-4 rounded">
        <div class="bg-white rounded">
          <h1 class="mb-4">結帳</h1>
          <h4 class="mb-4">訂單內容</h4>
          <div class="table-responsive text-nowrap">
            <table
              class="table bg-white table-striped table-hover align-middle rounded cart-table"
            >
              <thead>
                <tr>
                  <th class="d-none d-lg-block d-lg-block col-1">&nbsp;</th>
                  <th class="col-4">名稱</th>
                  <th class="col-2">價格</th>
                  <th class="col-3">報名人數</th>
                  <th class="col-1">合計</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in carts" :key="item.id">
                  <td class="d-none d-lg-block d-lg-block">
                    <img
                      :src="item.product.imageUrl"
                      height="100"
                      width="100"
                      class="object-fit-cover"
                    />
                  </td>
                  <td>{{ item.product.title }}</td>
                  <td>
                    <div class="d-flex flex-column">
                      <span
                        >NT$ {{ item.product.price }} /
                        {{ item.product.unit }}</span
                      >
                      <del class="text-secondary"
                        >NT$ {{ item.product.origin_price }}
                      </del>
                    </div>
                  </td>
                  <td>
                    {{ item.qty }}
                  </td>
                  <td>{{ item.total }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 class="text-end">總計 {{ cartTotal }}</h4>

          <hr class="my-5" />

          <h4 class="mb-4">付款資訊</h4>

          <v-form v-slot="{ errors }" @submit="onSubmit">
            <div class="row">
              <div class="col col-md-5 mb-3">
                <label for="payer" class="form-label">*付款人</label>
                <v-field
                  type="text"
                  class="form-control"
                  id="payer"
                  name="付款人"
                  rules="required"
                  :class="{ 'is-invalid': errors['付款人'] }"
                  v-model="data.user.name"
                />
                <error-message
                  name="付款人"
                  class="invalid-feedback"
                ></error-message>
              </div>
            </div>

            <div class="row">
              <div class="col col-md-5 mb-3">
                <label for="email" class="form-label">*信箱</label>
                <v-field
                  type="text"
                  class="form-control"
                  id="email"
                  name="信箱"
                  rules="required|email"
                  :class="{ 'is-invalid': errors['信箱'] }"
                  v-model="data.user.email"
                />
                <error-message
                  name="信箱"
                  class="invalid-feedback"
                ></error-message>
              </div>
            </div>

            <div class="row">
              <div class="col col-md-5 mb-3">
                <label for="tel" class="form-label">*電話</label>
                <v-field
                  type="text"
                  class="form-control"
                  id="tel"
                  name="電話"
                  rules="required|min:10"
                  :class="{ 'is-invalid': errors['電話'] }"
                  v-model="data.user.tel"
                />
                <error-message
                  name="電話"
                  class="invalid-feedback"
                ></error-message>
              </div>
            </div>

            <div class="row">
              <div class="col col-md-8 mb-3">
                <label for="address" class="form-label">*地址</label>
                <v-field
                  type="text"
                  class="form-control"
                  id="address"
                  name="地址"
                  rules="required"
                  :class="{ 'is-invalid': errors['地址'] }"
                  v-model="data.user.address"
                />
                <error-message
                  name="地址"
                  class="invalid-feedback"
                ></error-message>
              </div>
            </div>

            <div class="row">
              <div class="col col-md-8 mb-3">
                <label class="form-label">*付款方式</label>
                <div class="form-check">
                  <v-field
                    class="form-check-input"
                    type="radio"
                    id="atm"
                    name="payMethod"
                  />
                  <label class="form-check-label" for="atm"> ATM轉帳 </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    id="pay"
                    checked
                    name="payMethod"
                  />
                  <label class="form-check-label" for="pay">
                    課後現金付款
                  </label>
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col col-md-8">
                <label for="msg" class="form-label">留言</label>
                <textarea
                  class="form-control"
                  id="msg"
                  rows="3"
                  name="msg"
                  :class="{ 'is-invalid': errors['msg'] }"
                  v-model="data.message"
                ></textarea>
                <error-message
                  name="msg"
                  class="invalid-feedback"
                ></error-message>
              </div>
            </div>
            <button class="btn btn-accent border border-dark">送出訂單</button>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_BASE_URL, VITE_API_PATH } = import.meta.env;
import statusStore from "../../stores/statusStore";
import cartStore from "../../stores/cartStore";

import { mapState, mapActions } from "pinia";

export default {
  data() {
    return {
      data: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
    };
  },
  computed: {
    ...mapState(cartStore, ["carts"]),
    cartTotal() {
      let total = 0;
      this.carts.forEach((item) => {
        total += item.total;
      });
      return total;
    },
  },
  methods: {
    ...mapActions(cartStore, ["getCart"]),
    ...mapActions(statusStore, ["pushMsg"]),
    onSubmit() {
      const data = this.data;
      this.$http
        .post(`${VITE_BASE_URL}/v2/api/${VITE_API_PATH}/order`, { data })
        .then(() => {
          this.getCart();
          this.$router.push({ name: "orderDone" });
        })
        .catch(() => {
          this.pushMsg("failed", "送出失敗");
        });
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>
