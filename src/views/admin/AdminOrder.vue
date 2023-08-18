<template>
  <DeleteModal :get-order="getOrder" ref="deleteModal"></DeleteModal>
  <main class="bg-grey flex-grow-1">
    <div class="container-xxl py-4">
      <h1 class="mb-4">訂單管理</h1>
      <div class="table-responsive">
        <table
          class="table bg-white table-striped table-hover align-middle rounded"
        >
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">日期</th>
              <th scope="col">購入課程</th>
              <th scope="col">合計</th>
              <th scope="col">付款狀態</th>
              <th scope="col">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in order" :key="item.id">
              <th scope="row">{{ item.id }}</th>
              <td>
                <span style="width: 80px" class="d-inline-block">
                  {{
                    `${new Date(item.create_at * 1000).getFullYear()}-${
                      new Date(item.create_at * 1000).getMonth() + 1
                    }-${new Date(item.create_at * 1000).getDate()}`
                  }}
                </span>

                <span>
                  {{
                    ` ${new Date(item.create_at * 1000).getHours()}:${new Date(
                      item.create_at * 1000
                    ).getMinutes()}:${new Date(
                      item.create_at * 1000
                    ).getSeconds()}`
                  }}
                </span>
              </td>
              <td>
                <p
                  v-for="product in item.products"
                  :key="product.id"
                  style="margin-bottom: 0px"
                >
                  {{ product.product.title }}
                </p>
              </td>
              <td>{{ item.total }}</td>
              <td>
                <span class="text-success" v-if="item.is_paid">已付款</span>
                <span class="text-danger" v-else>未付款</span>
              </td>

              <td>
                <button
                  class="btn btn-outline-danger btn-sm"
                  @click="openModal(item)"
                >
                  刪除
                </button>
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
            @click="getOrder(--pages.current_page)"
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
            <a class="page-link" href="#" @click="getOrder(page)">{{ page }}</a>
          </li>
          <li
            class="page-item"
            :class="{ disabled: pages.total_pages === pages.current_page }"
            @click="getOrder(++pages.current_page)"
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
const { VITE_BASE_URL, VITE_API_PATH } = import.meta.env;
export default {
  data() {
    return {
      order: [],
      pages: {},
    };
  },
  components: {
    DeleteModal,
  },
  methods: {
    getOrder(page = 1) {
      this.$http(
        `${VITE_BASE_URL}v2/api/${VITE_API_PATH}/admin/orders/?page=${page}`
      ).then((res) => {
        this.order = res.data.orders;
        this.pages = res.data.pagination;
      });
    },
    openModal(item) {
      this.$refs.deleteModal.showModal("deleteOrder", item.id);
    },
  },

  mounted() {
    this.getOrder();
  },
};
</script>
