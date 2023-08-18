<template>
  <DeleteModal :getProduct="getProduct" ref="deleteModal">
    <template #header>確定刪除？</template>
    <template #body>您確定要刪除課程嗎？</template>
  </DeleteModal>
  <ProductModal
    :temp-product="tempProduct"
    :is-new="isNew"
    :getProduct="getProduct"
    ref="productModal"
  ></ProductModal>

  <main class="bg-grey flex-grow-1">
    <div class="container-xxl py-4">
      <h1 class="mb-3">課程管理</h1>
      <div class="text-end mb-3">
        <button class="btn btn-primary" @click="openModal('new')">
          建立新的產品
        </button>
      </div>
      <div class="table-responsive">
        <table class="table bg-white rounded">
          <thead>
            <tr>
              <th width="120">類別</th>
              <th>課程名稱</th>
              <th width="120">原價</th>
              <th width="120">售價</th>
              <th width="100">是否啟用</th>
              <th width="120">編輯</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item.id">
              <td>{{ item.category }}</td>
              <td>{{ item.title }}</td>
              <td>{{ item.origin_price }}</td>
              <td>{{ item.price }}</td>
              <td>
                <span class="text-success" v-if="item.is_enabled">啟用</span>
                <span class="text-danger" v-else>未啟用</span>
              </td>
              <td>
                <div class="btn-group">
                  <button
                    @click="openModal('edit', item)"
                    type="button"
                    class="btn btn-outline-primary btn-sm"
                  >
                    編輯
                  </button>
                  <button
                    @click="openModal('delete', item)"
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                  >
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="d-flex justify-content-center">
      <nav aria-label="Page navigation example" v-if="pages.total_pages > 0">
        <ul class="pagination">
          <li
            class="page-item"
            :class="{ disabled: pages.current_page === 1 }"
            @click="getProduct(--pages.current_page)"
          >
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li
            class="page-item"
            :class="{ active: page === pages.current_page }"
            v-for="page in pages.total_pages"
            :key="page + 'page'"
          >
            <a class="page-link" href="#" @click="getProduct(page)">{{
              page
            }}</a>
          </li>
          <li
            class="page-item"
            :class="{ disabled: pages.total_pages === pages.current_page }"
            @click="getProduct(++pages.current_page)"
          >
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </main>
</template>

<script>
import DeleteModal from "../../components/global/DeleteModal.vue";
import ProductModal from "../../components/admin/ProductModal.vue";
const { VITE_BASE_URL, VITE_API_PATH } = import.meta.env;

export default {
  data() {
    return {
      products: [],
      tempProduct: {
        imagesUrl: [],
      },
      isNew: "",
      pages: {},
    };
  },

  components: {
    ProductModal,
    DeleteModal,
  },

  methods: {
    getProduct(page = 1) {
      this.$http
        .get(
          `${VITE_BASE_URL}v2/api/${VITE_API_PATH}/admin/products?page=${page}`
        )
        .then((res) => {
          this.pages = res.data.pagination;
          this.products = res.data.products;
        });
    },
    openModal(type, item) {
      if (type === "new") {
        this.isNew = true;
        this.tempProduct = { imagesUrl: [] };
        this.$refs.productModal.showModal();
      } else if (type === "edit") {
        this.isNew = false;
        this.tempProduct = { ...item };
        if (!this.tempProduct.imagesUrl) {
          this.tempProduct.imagesUrl = [];
        }
        this.$refs.productModal.showModal();
      } else if (type === "delete") {
        this.$refs.deleteModal.showModal("deleteProduct", item.id);
      }
    },
  },

  mounted() {
    this.getProduct();
  },
};
</script>
