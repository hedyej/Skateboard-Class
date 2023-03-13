<template>
  <main class="bg-grey nav-space">
    <div class="container pt-4 pb-6">
      <RouterLink :to="{ name: 'class' }" class="btn btn-outline-dark border-0">
        <font-awesome-icon
          class="me-2"
          :icon="['fas', 'arrow-left']"
          :to="{ name: 'class' }"
        />上到課程列表</RouterLink
      >

      <div class="d-flex pt-4 pb-5">
        <div class="d-flex flex-column">
          <img
            v-for="img in product.imagesUrl"
            :key="img"
            width="100"
            height="75"
            :src="img"
            class="object-fit-cover mb-3"
          />
        </div>

        <img
          width="600"
          height="400"
          :src="product.imageUrl"
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
      <h4 class="mb-3">課程簡介</h4>
      <p class="mb-5">{{ product.content }}</p>
      <h4 class="mb-3">課程說明</h4>
      <p>{{ product.description }}</p>
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
          console.log("商品資訊", this.product);
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
