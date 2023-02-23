<template>
  <div class="bg-grey py-4">
    <div class="container">
      <button type="button" class="btn btn-outline-dark border-0 mb-3">
        <font-awesome-icon class="me-2" :icon="['fas', 'arrow-left']" />
        上一頁
      </button>

      <div class="bg-white p-4 rounded">
        <div class="bg-white rounded">
          <h1 class="mb-4">新增課程</h1>

          <h4 class="mb-4">課程資訊</h4>
          <form action="">
            <div class="row">
              <div class="col-8">
                <div class="mb-3">
                  <label for="formGroupExampleInput" class="form-label"
                    >名稱</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-4">
                <div class="mb-3">
                  <label for="formGroupExampleInput" class="form-label"
                    >類型</label
                  >
                  <select class="form-select">
                    <option selected>團體班</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-4">
                <div class="mb-3">
                  <label for="formGroupExampleInput" class="form-label"
                    >課程人數</label
                  >
                  <label for="qtyInput" class="form-label">Example label</label>
                  <div class="input-group">
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
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-4">
                <div class="mb-3">
                  <label for="formGroupExampleInput" class="form-label"
                    >單位</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-4">
                <label for="formGroupExampleInput" class="form-label"
                  >原價</label
                >
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">NT$</span>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div class="col-4">
                <label for="formGroupExampleInput" class="form-label"
                  >個假</label
                >
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">NT$</span>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-8">
                <label for="exampleFormControlTextarea1" class="form-label"
                  >留言</label
                >
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>

            <div class="row">
              <div class="col-4">
                <label for="exampleFormControlTextarea1" class="form-label"
                  >開放報名</label
                >
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                  />
                </div>
              </div>
            </div>

            <hr class="my-5" />

            <h4 class="mb-4">課程圖片</h4>

            <div class="row mb-3">
              <div class="col-8">
                <div>
                  <label for="formFile" class="form-label">主要圖片</label>
                  <input class="form-control" type="file" id="formFile" />
                </div>
              </div>
            </div>

            <div class="row mb-5">
              <div class="col-8">
                <div>
                  <label for="formFile" class="form-label"
                    >相關圖片(至多 4 張)</label
                  >
                  <input class="form-control" type="file" id="formFile" />
                </div>
              </div>
            </div>

            <div class="d-flex">
              <button
                type="button"
                class="me-3 btn btn-accent border border-dark"
              >
                新增
              </button>
              <button type="button" class="btn btn-outline-dark">取消</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
