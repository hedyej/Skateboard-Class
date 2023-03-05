<template>
  <header>
    <div
      style="
        background-image: url('../src/assets/img/homeBg.png');
        height: 240px;
        width: 100%;
        background-size: cover;
      "
      class="d-flex align-items-center justify-content-center"
    >
      <h1 class="display-4 text-white" style="text-shadow: 2px 3px 5px #4d4d4d">
        所有課程
      </h1>
    </div>
  </header>

  <main class="bg-grey py-5">
    <div class="container">
      <nav class="nav nav-pills d-flex justify-content-center mb-5">
        <a
          v-for="tab in tabs"
          :key="tab"
          class="nav-link me-3"
          :class="{ active: nowTab === tab }"
          href="#"
          aria-current="page"
          @click.prevent="nowTab = tab"
          >{{ tab }}</a
        >
      </nav>

      <div class="row row-cols-3">
        <div class="col" v-for="product in products" :key="product.id">
          <div class="card border-0">
            <img
              :src="product.imageUrl"
              class="card-img-top object-fit-cover"
              alt="..."
              style="height: 200px"
            />
            <div class="card-body bg-white">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">
                {{ product.content }}
              </p>
              <RouterLink
                :to="`/class/${product.id}`"
                class="btn btn-outline-dark w-100 text-center"
                >查看更多</RouterLink
              >
            </div>
          </div>
        </div>
      </div>

      <nav aria-label="Page navigation example" class="mt-5 text-center">
        <ul class="pagination justify-content-center">
          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    </div>
  </main>
</template>

<script>
import { RouterLink } from "vue-router";
const { VITE_BASE_URL, VITE_API_PATH } = import.meta.env;
export default {
  components: {
    RouterLink,
  },
  data() {
    return {
      products: [],
      tabs: ["所有課程", "大橘", "虎斑"],
      nowTab: "所有課程",
    };
  },
  methods: {
    getProduct() {
      this.$http
        .get(`${VITE_BASE_URL}v2/api/${VITE_API_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products;
        })
        .catch((err) => console.log(err));
    },
    getTypeProduct(type) {
      console.log(type);
      this.$http
        .get(
          `${VITE_BASE_URL}v2/api/${VITE_API_PATH}/products?category=${type}`
        )
        .then((res) => {
          this.products = res.data.products;
          console.log(res);
        })
        .catch((err) => console.log(err));
    },
  },
  watch: {
    nowTab() {
      if (this.nowTab === "所有課程") {
        this.getProduct();
        console.log("all");
      } else {
        this.getTypeProduct(this.nowTab);
        console.log(this.nowTab);
      }
    },
  },
  mounted() {
    this.getProduct();
    console.log("產品", this.products);
  },
};
</script>
