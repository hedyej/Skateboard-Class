<template>
  <main class="bg-grey">
    <div class="container pt-4 pb-6 bg-grey">
      <RouterLink :to="{ name: 'class' }" class="btn btn-outline-dark border-0">
        <font-awesome-icon
          class="me-2"
          :icon="['fas', 'arrow-left']"
        />上一頁</RouterLink
      >

      <div class="d-flex pt-4 pb-5">
        <div class="d-flex flex-column">
          <img
            width="100px"
            height="75px"
            src="@/assets/img/Home02.png"
            class="object-fit-cover mb-3"
            alt=""
          />
          <img
            width="100px"
            height="75px"
            src="@/assets/img/Home02.png"
            class="object-fit-cover mb-3"
            alt=""
          />
          <img
            width="100px"
            height="75px"
            src="@/assets/img/Home02.png"
            class="object-fit-cover mb-3"
            alt=""
          />
        </div>

        <img
          width="600px"
          height="400px"
          src="@/assets/img/Home02.png"
          class="object-fit-cover ms-3"
        />

        <div class="ms-5 flex-grow-1">
          <h2 class="mb-3">{{ product.title }}</h2>
          <div class="d-flex mb-3 align-items-center">
            <del class="me-3 text-secondary">NT$ {{ product.price }}</del>
            <h4>NT$ {{ product.price }} /人</h4>
          </div>
          <form>
            <div class="mb-3">
              <label for="qtyInput" class="form-label">報名人數</label>
              <div class="input-group">
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  @click="--qty"
                >
                  <font-awesome-icon :icon="['fas', 'minus']" />
                </button>
                <input
                  id="qtyInput"
                  type="text"
                  class="form-control border border-secondary text-center"
                  v-model="qty"
                />
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  @click="++qty"
                >
                  <font-awesome-icon :icon="['fas', 'plus']" />
                </button>
              </div>
            </div>
            <p class="text-secondary">
              剩餘人數: <span>{{ product.num }}</span>
            </p>

            <button
              type="submit"
              class="btn btn-accent border border-dark mb-2 w-100"
              @click.prevent="addCart(id, qty)"
            >
              加入購物車
            </button>
          </form>
        </div>
      </div>
    </div>
  </main>

  <section class="bg-grey">
    <div class="container pb-3">
      <h4 class="mb-3">課程說明</h4>
      <p>內容</p>
    </div>
  </section>
</template>

<script>
const { VITE_BASE_URL, VITE_API_PATH } = import.meta.env;
import { mapActions } from "pinia";
import { RouterLink } from "vue-router";
import cartStore from "../../stores/cartStore";
export default {
  components: {
    RouterLink,
  },
  data() {
    return {
      qty: 1,
      product: {},
      id: this.$route.params.id,
    };
  },
  methods: {
    getProduct() {
      this.$http(`${VITE_BASE_URL}v2/api/${VITE_API_PATH}/product/${this.id}`)
        .then((res) => {
          this.product = res.data.product;
        })
        .catch((err) => console.log(err));
    },
    ...mapActions(cartStore, ["addCart"]),
  },
  mounted() {
    this.getProduct();
  },
};
</script>
