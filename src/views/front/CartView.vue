<template>
  <main class="bg-grey">
    <div class="container py-4">
      <h1>購物車</h1>
      <div class="text-end">
        <button type="button" class="btn btn-outline-dark mb-3">
          刪除全部
        </button>
      </div>

      <table
        class="table bg-white table-striped table-hover align-middle rounded"
      >
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">名稱</th>
            <th scope="col">價格</th>
            <th scope="col">數量</th>
            <th scope="col">合計</th>
            <th scope="col">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <img
                src="@/assets/img/Home02.png"
                height="100px"
                width="100px"
                class="object-fit-cover"
              />
            </th>
            <td class="fw-bold">團體進階班(6人)</td>
            <td>
              <div class="d-flex flex-column">
                <span>NT$ 1000 / 人</span>
                <del class="text-secondary">NT$ 1500</del>
              </div>
            </td>
            <td>
              <div class="input-group input-group-sm" style="width: 200px">
                <button class="btn btn-outline-secondary" type="button">
                  <font-awesome-icon :icon="['fas', 'minus']" />
                </button>
                <input
                  id="qtyInput"
                  type="text"
                  class="form-control border border-secondary"
                />
                <button class="btn btn-outline-secondary" type="button">
                  <font-awesome-icon :icon="['fas', 'plus']" />
                </button>
              </div>
            </td>
            <td>NT$ 1500</td>
            <td>
              <font-awesome-icon class="me-4" :icon="['fas', 'pen']" />
              <font-awesome-icon class="me-2" :icon="['fas', 'trash-can']" />
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

  <!-- 課程管理 -->
  <!-- 課程管理 -->
  <!-- 課程管理 -->

  <main class="bg-grey">
    <div class="container py-4">
      <h1 class="mb-4">課程管理</h1>
      <div class="d-flex justify-content-between mb-3">
        <select class="form-select" style="width: 200px">
          <option selected>課程類型</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <button type="button" class="btn btn-accent border border-dark">
          立即結帳
        </button>
      </div>

      <table
        class="table bg-white table-striped table-hover align-middle rounded"
      >
        <thead>
          <tr>
            <th scope="col">類型</th>
            <th scope="col">名稱</th>
            <th scope="col">原價</th>
            <th scope="col">特價</th>
            <th scope="col">剩餘名額</th>
            <th scope="col">開放報名</th>
            <th scope="col">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">團體班</th>
            <td class="fw-bold">團體進階班(6人)</td>
            <td>NT$ 1500</td>
            <td>NT$ 1000</td>
            <td>3</td>
            <td>
              <font-awesome-icon
                class="text-success"
                :icon="['fas', 'circle-check']"
              />

              <font-awesome-icon
                class="text-success"
                :icon="['fas', 'circle-xmark']"
              />
            </td>

            <td>
              <font-awesome-icon class="me-4" :icon="['fas', 'pen']" />
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

  <!-- 訂單管理 -->
  <!-- 訂單管理 -->
  <!-- 訂單管理 -->

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
                class="text-success"
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
