<template>
  <div class="bg-grey flex-grow-1">
    <main class="container-xxl pt-4">
      <RouterLink
        :to="{ name: 'class' }"
        class="btn btn-outline-dark border-0 mb-3"
      >
        <font-awesome-icon
          class="me-2"
          :icon="['fas', 'arrow-left']"
          :to="{ name: 'class' }"
        />回到課程列表</RouterLink
      >

      <div class="row">
        <div class="col-12 col-md-8 container">
          <div class="row">
            <div class="col mb-4">
              <div class="ratio ratio-16x9">
                <img :src="bigImg" class="object-fit-cover" />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-4" v-for="(img, index) in imgs" :key="img">
              <div class="ratio ratio-16x9">
                <img
                  :src="img"
                  class="object-fit-cover me-3 cursor-pointer"
                  @click="changeImg(img, index)"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="ms-md-3 mt-5 mt-md-0">
            <h2 class="mb-3">{{ product.title }}</h2>
            <div class="d-flex mb-3 align-items-center">
              <del
                class="me-3 text-secondary"
                v-if="product.origin_price === product.price"
                >NT$ {{ product.origin_price }}</del
              >
              <h4>NT$ {{ product.price }} /人</h4>
            </div>
            <form>
              <div class="mb-3">
                <label for="qtyInput" class="form-label">報名人數</label>
                <div class="input-group">
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    @click="qty -= 1"
                    :disabled="qty === 1"
                  >
                    <font-awesome-icon :icon="['fas', 'minus']" />
                  </button>
                  <input
                    id="qtyInput"
                    type="text"
                    class="form-control border border-secondary text-center"
                    v-model.number="qty"
                    @change="checkQty(qty)"
                  />
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    @click="qty += 1"
                    :disabled="qty > product.num || qty === product.num"
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
                @click.prevent="classAddCart(id, qty)"
              >
                <font-awesome-icon
                  icon="spinner"
                  class="fa-spin"
                  v-if="isLoading"
                />
                加入購物車
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>

    <section class="bg-grey container-xxl">
      <div class="row pb-3 mt-5">
        <div class="col-12 col-md-8">
          <h4 class="mb-3">課程簡介</h4>
          <p class="mb-5">{{ product.content }}</p>
          <h4 class="mb-3">課程說明</h4>
          <p>{{ product.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const { VITE_BASE_URL, VITE_API_PATH } = import.meta.env;
import { mapActions, mapState } from "pinia";

import cartStore from "../../stores/cartStore";
export default {
  data() {
    return {
      qty: 1,
      product: {},
      id: this.$route.params.id,
      bigImg: "",
      imgs: [],
    };
  },
  computed: {
    ...mapState(cartStore, ["isLoading"]),
  },
  methods: {
    ...mapActions(cartStore, ["addCart", "setLoadingTrue"]),
    getProduct() {
      this.$http(
        `${VITE_BASE_URL}v2/api/${VITE_API_PATH}/product/${this.id}`
      ).then((res) => {
        this.product = res.data.product;
        this.bigImg = res.data.product.imageUrl;
        this.imgs = res.data.product.imagesUrl;
      });
    },
    changeImg(img, index) {
      this.imgs.push(this.bigImg);
      this.bigImg = img;
      this.imgs.splice(index, 1);
    },
    classAddCart(id, qty) {
      this.setLoadingTrue();
      this.addCart(id, qty);
      this.getProduct();
    },
    checkQty(num) {
      this.qty = num < 1 ? 1 : num;
      this.qty = num > this.product.num ? this.product.num : this.qty;
    },
  },

  mounted() {
    this.getProduct();
  },
};
</script>
