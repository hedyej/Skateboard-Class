<template>
  <main class="bg-grey">
    <div class="container py-4">
      <h1 class="mb-4">訂單管理</h1>
      <div class="d-flex justify-content-between mb-3">
        <select class="form-select" style="width: 200px">
          <option selected>付款狀態</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <button type="button" class="btn btn-outline-dark mb-3">
          刪除所有訂單
        </button>
      </div>

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
          <tr>
            <th scope="row" class="fw-bold">ID</th>
            <td>日期</td>
            <td>購入課程</td>
            <td>合計</td>
            <td>
              <font-awesome-icon
                class="text-success"
                :icon="['fas', 'circle-check']"
              />

              <font-awesome-icon
                class="text-danger"
                :icon="['fas', 'circle-xmark']"
              />
            </td>

            <td>
              <font-awesome-icon class="me-2" :icon="['fas', 'trash-can']" />
            </td>
          </tr>
        </tbody>
      </table>

      <nav aria-label="Page navigation example" class="mt-3 text-center">
        <ul class="pagination justify-content-end">
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
