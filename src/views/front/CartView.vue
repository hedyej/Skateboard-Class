<template>
  <DeleteModal ref="deleteModal">
    <template #header>確定刪除嗎？</template>
    <template #body>您確定要刪除購物車課程嗎？</template>
  </DeleteModal>

  <main class="bg-grey flex-grow-1">
    <div class="container-xxl py-4">
      <h1 class="mb-4">購物車</h1>
      <div class="text-end">
        <button
          type="button"
          class="btn btn-outline-dark mb-3"
          @click="showModal('allCarts')"
          v-if="carts.length"
        >
          刪除全部
        </button>
      </div>
      <div class="table-responsive text-nowrap">
        <table
          class="table bg-white table-striped table-hover align-middle rounded cart-table"
        >
          <thead>
            <tr>
              <th class="d-none d-lg-block d-lg-block col-1">&nbsp;</th>
              <th class="col-3">名稱</th>
              <th class="col-2">價格</th>
              <th class="col-3">報名人數</th>
              <th class="col-1">合計</th>
              <th class="text-center col-1">操作</th>
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
                  <del
                    class="text-secondary"
                    v-if="item.product.origin_price === item.product.price"
                    >NT$ {{ item.product.origin_price }}
                  </del>
                </div>
              </td>
              <td>
                <div class="input-group input-group-sm" style="width: 100px">
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    @click="
                      () => {
                        editCart(item.id, item.product.id, item.qty - 1);
                      }
                    "
                    :disabled="item.qty === 1"
                  >
                    <font-awesome-icon :icon="['fas', 'minus']" />
                  </button>
                  <input
                    id="qtyInput"
                    type="text"
                    class="form-control border border-secondary text-center"
                    v-model.number="item.qty"
                    @change="
                      () => {
                        checkQty(item.qty);
                        editCart(item.id, item.product.id, item.qty);
                      }
                    "
                  />
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    @click="
                      () => {
                        editCart(item.id, item.product.id, item.qty + 1);
                      }
                    "
                  >
                    <font-awesome-icon :icon="['fas', 'plus']" />
                  </button>
                </div>
              </td>
              <td>NT$ {{ item.total }}</td>
              <td class="text-center">
                <font-awesome-icon
                  class="me-2 cursor-pointer"
                  :icon="['fas', 'trash-can']"
                  @click="showModal('oneCart', item.id)"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="text-center">
        <div v-if="!carts.length" class="dflex flex-column align-items-center">
          <font-awesome-icon
            :icon="['fas', 'face-sad-tear']"
            class="my-4"
            style="font-size: 64px"
          />
          <p>尚無購入課程</p>
        </div>
      </div>

      <div class="text-end" v-if="carts.length">
        <h4 class="mb-4">總計 {{ cartTotal }}</h4>
        <RouterLink
          :to="{ name: 'order' }"
          type="button"
          class="btn btn-accent border border-dark"
        >
          立即結帳
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from "pinia";
import cartStore from "../../stores/cartStore.js";
import DeleteModal from "../../components/global/DeleteModal.vue";

export default {
  data() {
    return {
      deleteModal: {
        type: "",
        cartId: "",
      },
    };
  },
  components: {
    DeleteModal,
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
    ...mapActions(cartStore, ["getCart", "editCart"]),
    showModal(type, cartId) {
      this.$refs.deleteModal.showModal(type, cartId);
    },
    checkQty(num) {
      this.qty = num < 1 ? 1 : num;
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>
