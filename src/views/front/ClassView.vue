<template>
  <header>
    <div
      style="
        background-image: url('~img/class/classBg.png');
        height: 240px;
        width: 100%;
        background-size: cover;
        background-position: center 60%;
      "
      class="d-flex align-items-center justify-content-center"
    >
      <h1 class="display-4 text-white" style="text-shadow: 2px 3px 5px #4d4d4d">
        滑板課程
      </h1>
    </div>
  </header>

  <main class="bg-grey py-5 flex-grow-1">
    <div class="container-xxl">
      <nav class="nav nav-pills d-flex justify-content-center mb-5">
        <a
          v-for="tab in tabs"
          :key="tab"
          class="nav-link me-3"
          :class="{ active: nowTab === tab }"
          href="#"
          aria-current="page"
          @click.prevent="changeTab(tab)"
          >{{ tab }}</a
        >
      </nav>
      <div class="mb-4 d-flex justify-content-center">
        <div class="input-group me-3" style="width: 400px">
          <input
            type="text"
            class="form-control border-secondary"
            placeholder="搜尋課程名稱"
            v-model="keyword"
            @keydown.enter="searchWord"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchWord"
          >
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
          </button>
        </div>

        <button v-if="isSearch" type="button" class="btn" @click="reset">
          Reset
        </button>
      </div>

      <div class="position-relative">
        <VLoading
          v-model:active="isLoading"
          :is-full-page="isFullPage"
          :can-cancel="false"
          :on-cancel="false"
          :opacity="0"
        >
        </VLoading>
        <div style="height: 200px" v-if="isLoading"></div>

        <div class="row row-cols-1 row-cols-sm-2 row-cols-xl-4" v-else>
          <div class="col d-flex" v-for="product in products" :key="product.id">
            <div class="card border-0 rounded mb-4 w-100">
              <img
                :src="product.imageUrl"
                class="card-img-top object-fit-cover"
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
      <div class="text-center" v-if="!this.products.length && !isLoading">
        <div class="dflex flex-column align-items-center">
          <font-awesome-icon
            :icon="['fas', 'face-sad-tear']"
            class="mb-4"
            style="font-size: 64px"
          />
          <p>沒有相關課程</p>
        </div>
      </div>

      <div>
        <nav
          v-if="pagination.total_pages > 1 && !isSearch"
          class="mt-5 text-center"
        >
          <ul class="pagination justify-content-center">
            <li class="page-item" :class="{ disabled: !pagination.has_pre }">
              <a
                class="page-link"
                href="#"
                @click="getProduct(nowTab, pagination.current_page - 1)"
                >上一頁</a
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
            <li class="page-item" :class="{ disabled: !pagination.has_next }">
              <a
                class="page-link"
                href="#"
                @click="getProduct(nowTab, pagination.current_page + 1)"
                >下一頁</a
              >
            </li>
          </ul>
        </nav>

        <!-- 搜尋結果pagination -->
        <nav
          v-if="isSearch && searchPagination.total_pages > 1"
          class="mt-5 text-center"
        >
          <ul class="pagination justify-content-center">
            <li
              class="page-item"
              :class="{ disabled: searchPagination.nowPage === 0 }"
            >
              <a class="page-link" href="#" @click="changeSearchPage">上一頁</a>
            </li>
            <li
              v-for="i in searchPagination.total_pages"
              :key="i"
              class="page-item"
            >
              <a
                class="page-link"
                :class="{ active: i === searchPagination.nowPage + 1 }"
                href="#"
                @click="changeSearchPage"
                >{{ i }}
              </a>
            </li>
            <li
              class="page-item"
              :class="{
                disabled:
                  searchPagination.total_pages === searchPagination.nowPage + 1,
              }"
              @click="changeSearchPage"
            >
              <a class="page-link" href="#">下一頁</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </main>
</template>

<script>
const { VITE_BASE_URL, VITE_API_PATH } = import.meta.env;
export default {
  data() {
    return {
      products: [],
      originProducts: [],
      tabs: ["所有課程", "團體班", "個人班"],
      nowTab: "所有課程",
      pagination: {},
      isLoading: true,
      isFullPage: false,
      keyword: "",
      isSearch: false,
      getProductApi: false,
      resultPage: [],
      searchPagination: {
        total_pages: 0,
        nowPage: 0,
      },
    };
  },
  methods: {
    getProduct(type, page = 1) {
      this.isLoading = true;
      if (type === "所有課程") {
        this.$http
          .get(`${VITE_BASE_URL}v2/api/${VITE_API_PATH}/products?page=${page}`)
          .then((res) => {
            this.products = res.data.products;
            this.pagination = res.data.pagination;
            this.isLoading = false;
          });

        this.$http
          .get(`${VITE_BASE_URL}v2/api/${VITE_API_PATH}/products/all`)
          .then((res) => {
            this.originProducts = res.data.products;
          });
      } else {
        this.$http
          .get(
            `${VITE_BASE_URL}v2/api/${VITE_API_PATH}/products?page=${page}&category=${type}`
          )
          .then((res) => {
            this.products = res.data.products;
            this.pagination = res.data.pagination;
            this.isLoading = false;
          });

        this.$http
          .get(
            `${VITE_BASE_URL}v2/api/${VITE_API_PATH}/products?category=${type}`
          )
          .then((res) => {
            this.originProducts = res.data.products;
          });
      }
    },
    searchWord() {
      this.resultPage = [];
      let filterProducts = this.originProducts.filter((item) => {
        return item.title.match(this.keyword);
      });

      const pages =
        Math.ceil(filterProducts.length / 10) > 1
          ? Math.ceil(filterProducts.length / 10)
          : 1;

      for (let i = 0; i < pages; i++) {
        const pageProducts = filterProducts.slice(i * 10, (i + 1) * 10);
        this.resultPage.push(pageProducts);
      }

      this.isSearch = true;
      this.searchPagination.total_pages = this.resultPage.length;
      this.products = this.resultPage[0];
    },

    reset() {
      this.getProduct(this.nowTab);
      this.keyword = "";
      this.isSearch = false;
    },

    changeSearchPage(e) {
      let page = e.target.textContent;

      if (page === "Previous") {
        const prePage = this.searchPagination.nowPage - 1;
        this.products = this.resultPage[prePage];
      } else if (page === "Next") {
        const nextPage = this.searchPagination.nowPage + 1;
        this.products = this.resultPage[nextPage];
      } else {
        page = page * 1;
        page = page > 0 ? page - 1 : 0;
        this.searchPagination.nowPage = page;
        this.products = this.resultPage[page];
      }
    },

    changeTab(tab) {
      this.nowTab = tab;
      this.isSearch = false;
      this.getProduct(this.nowTab);
      this.keyword = "";
    },
  },

  mounted() {
    this.getProduct(this.nowTab);
  },
};
</script>
