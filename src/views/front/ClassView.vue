<template>
  <header>
    <div
      style="
        background-image: url('../src/assets/img/homeBg.png');
        height: 240px;
        width: 100%;
        background-size: cover;
      "
      class="d-flex align-items-center justify-content-center nav-space"
    >
      <h1 class="display-4 text-white" style="text-shadow: 2px 3px 5px #4d4d4d">
        所有課程
      </h1>
    </div>
  </header>

  <main class="bg-grey py-5 flex-grow-1">
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
      <div class="position-relative">
        <Loading
          v-model:active="isLoading"
          :is-full-page="isFullPage"
          :can-cancel="false"
          :on-cancel="false"
          style="height: 160px"
        ></Loading>

        <div class="row row-cols-3">
          <div class="col" v-for="product in products" :key="product.id">
            <div class="card border-0 rounded mb-4">
              <img
                :src="product.imageUrl"
                class="card-img-top object-fit-cover"
                alt="..."
                style="height: 200px"
              />
              <div class="card-body bg-white rounded-bottom">
                <h5 class="card-title text-truncate">{{ product.title }}</h5>
                <p class="card-text text-line">
                  {{ product.content }}
                </p>
                <RouterLink
                  :to="`/class/${product.id}`"
                  class="btn btn-outline-dark w-100 text-center"
                  href="#"
                  >查看更多</RouterLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav v-if="pagination.total_pages > 1" class="mt-5 text-center">
        <ul class="pagination justify-content-center">
          <li class="page-item" :disabled="!pagination.has_pre">
            <a
              class="page-link"
              href="#"
              @click="getProduct(nowTab, --pagination.current_page)"
              >Previous</a
            >
          </li>
          <li v-for="i in pagination.total_pages" :key="i" class="page-item">
            <a
              class="page-link"
              :class="{ active: i === pagination.current_page }"
              href="#"
              @click="getProduct(nowTab, i)"
              >{{ i }}</a
            >
          </li>
          <li class="page-item" :disabled="!pagination.has_next">
            <a
              class="page-link"
              href="#"
              @click="getProduct(nowTab, ++pagination.current_page)"
              >Next</a
            >
          </li>
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
      pagination: {},
      isLoading: true,
      isFullPage: false,
    };
  },
  methods: {
    getProduct(type, page = 1) {
      if (type === "所有課程") {
        this.$http
          .get(`${VITE_BASE_URL}v2/api/${VITE_API_PATH}/products?page=${page}`)
          .then((res) => {
            this.products = res.data.products;
            this.pagination = res.data.pagination;
            this.isLoading = false;
            console.log(res);
          })
          .catch((err) => console.log(err));
      } else {
        console.log(type);
        this.$http
          .get(
            `${VITE_BASE_URL}v2/api/${VITE_API_PATH}/products?page=${page}&category=${type}`
          )
          .then((res) => {
            this.products = res.data.products;
            this.pagination = res.data.pagination;
            console.log(res);
          })
          .catch((err) => console.log(err));
      }
    },
  },
  watch: {
    nowTab() {
      this.getProduct(this.nowTab);
      console.log(this.nowTab);
    },
  },
  mounted() {
    this.getProduct(this.nowTab);
    console.log(this.pagination);
  },
};
</script>
