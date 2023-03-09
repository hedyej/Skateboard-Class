<template>
  <DeleteModal ref="deleteModal">
    <template #header>確定刪除？</template>
    <template #body>您確定要刪除購物車課程嗎？</template>
  </DeleteModal>
  <main class="bg-grey flex-grow-1 nav-space">
    <div class="container py-4">
      <h1>購物車</h1>
      <div class="text-end">
        <button
          type="button"
          class="btn btn-outline-dark mb-3"
          @click="showModal('all')"
        >
          刪除全部
        </button>
      </div>

      <table
        class="table bg-white table-striped table-hover align-middle rounded"
      >
        <thead>
          <tr>
            <th scope="col" class="col-2"></th>
            <th scope="col" class="col-2">名稱</th>
            <th scope="col" class="col-2">價格</th>
            <th scope="col" class="col-3">報名人數</th>
            <th scope="col">合計</th>
            <th scope="col" class="col-1">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in carts" :key="item.id">
            <th scope="row">
              <img
                :src="item.product.imageUrl"
                height="100"
                width="100"
                class="object-fit-cover"
              />
            </th>
            <td>{{ item.product.title }}</td>
            <td>
              <div class="d-flex flex-column">
                <span
                  >NT$ {{ item.product.price }} / {{ item.product.unit }}</span
                >
                <del class="text-secondary"
                  >NT$ {{ item.product.origin_price }}
                </del>
              </div>
            </td>
            <td>
              <div class="input-group input-group-sm" style="width: 200px">
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  @click="() => editCart(item.id, item.product.id, --item.qty)"
                >
                  <font-awesome-icon :icon="['fas', 'minus']" />
                </button>
                <input
                  id="qtyInput"
                  type="text"
                  class="form-control border border-secondary text-center"
                  v-model.number="item.qty"
                  @change="() => editCart(item.id, item.product.id, item.qty)"
                />
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  @click="() => editCart(item.id, item.product.id, ++item.qty)"
                >
                  <font-awesome-icon :icon="['fas', 'plus']" />
                </button>
              </div>
            </td>
            <td>NT$ 1500</td>
            <td>
              <!-- <font-awesome-icon class="me-4" :icon="['fas', 'pen']" /> -->

              <font-awesome-icon
                class="me-2 cursor-pointer"
                :icon="['fas', 'trash-can']"
                @click="showModal('one', item.id)"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-end">
        <h4 class="mb-4">總計 NT$ 1000</h4>
        <button type="button" class="btn btn-accent border border-dark">
          立即結帳
        </button>
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
  },
  methods: {
    ...mapActions(cartStore, [
      "getCart",
      "editCart",
      "deleteCart",
      "deleteAllCarts",
    ]),
    showModal(type, cartId) {
      this.$refs.deleteModal.showModal(type, cartId);
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>
