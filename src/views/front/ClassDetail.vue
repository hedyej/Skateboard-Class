<template>
  <main class="bg-grey">
    <div class="container pt-4 pb-6 bg-grey">
      <button type="button" class="btn btn-outline-dark border-0">
        <font-awesome-icon class="me-2" :icon="['fas', 'arrow-left']" />
        上一頁
      </button>

      <div class="d-flex pt-4 pb-5">
        <div class="d-flex flex-column">
          <img
            width="100px"
            height="75px"
            src="@/assets/img/Home02.png"
            class="object-fit-cover border rounded mb-3"
            alt=""
          />
          <img
            width="100px"
            height="75px"
            src="@/assets/img/Home02.png"
            class="object-fit-cover border rounded mb-3"
            alt=""
          />
          <img
            width="100px"
            height="75px"
            src="@/assets/img/Home02.png"
            class="object-fit-cover border rounded mb-3"
            alt=""
          />
        </div>

        <img
          width="600px"
          height="400px"
          src="@/assets/img/Home01.png"
          class="object-fit-cover border rounded ms-3"
          alt=""
        />

        <div class="ms-5">
          <h1 class="mb-3">團體進階班</h1>
          <div class="d-flex mb-3 align-items-center">
            <del class="me-3 text-secondary">NT$ 1500</del>
            <h4>NT$ 1000 / 人</h4>
          </div>
          <form>
            <div class="mb-3">
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
            <p class="text-secondary">剩餘人數: <span>8</span></p>

            <div class="d-flex flex-column">
              <button
                type="submit"
                class="btn btn-accent border border-dark btn-lg mt-5 mb-2"
              >
                Submit
              </button>
              <button type="submit" class="btn btn-outline-dark btn-lg">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>

  <section class="bg-grey">
    <div class="container pb-3">
      <H4 class="mb-3">課程說明</H4>
      <p>內容</p>
    </div>
  </section>
</template>
