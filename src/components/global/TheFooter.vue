<template>
  <footer
    class="bg-primary text-white py-5 d-lg-none d-flex flex-column align-items-center d-md-none"
  >
    <img
      class="me-3 mb-4"
      src="@/assets/img/home/logo.svg"
      style="width: 160px"
    />
    <div class="mb-4 text-center">
      <p class="mb-2"><strong>聯絡我們</strong></p>
      <ul class="list-unstyled">
        <li class="mb-1">02-2344-2444</li>
        <li class="mb-1">service@zhelu.tw</li>
        <li class="mb-1">台北市仁愛區福人路73號</li>
      </ul>
    </div>

    <div class="mb-4">
      <p class="mb-2">社群媒體</p>
      <div class="text-white">
        <font-awesome-icon class="me-3 fa-lg" :icon="['fab', 'line']" />
        <font-awesome-icon class="me-2 fa-lg" :icon="['fab', 'youtube']" />
      </div>
    </div>
    <p>© 2023 Hedy All Rights Reserved.</p>
  </footer>

  <footer class="bg-primary text-white py-5 d-none d-md-block">
    <div class="container d-flex justify-content-between">
      <div class="d-flex flex-column justify-content-between">
        <img
          class="me-3"
          src="@/assets/img/home/logo.svg"
          style="width: 160px"
        />
        <p>© 2023 Hedy All Rights Reserved.</p>
      </div>

      <div class="d-flex">
        <div class="me-5">
          <p class="mb-3"><strong>聯絡我們</strong></p>
          <ul class="list-unstyled">
            <li class="mb-1">02-2344-2444</li>
            <li class="mb-1">service@zhelu.tw</li>
            <li class="mb-1">台北市仁愛區福人路73號</li>
          </ul>
        </div>

        <div>
          <p class="mb-3">社群媒體</p>
          <div class="text-white">
            <font-awesome-icon class="me-3 fa-lg" :icon="['fab', 'line']" />
            <font-awesome-icon class="me-2 fa-lg" :icon="['fab', 'youtube']" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
