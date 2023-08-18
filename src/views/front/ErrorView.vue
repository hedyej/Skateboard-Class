<template>
  <div class="d-flex flex-column align-items-center py-6">
    <div class="d-flex align-items-center">
      <font-awesome-icon
        class="me-4 text-dark"
        :icon="['fas', 'circle-xmark']"
        style="height: 60px"
      />
      <h1 style="font-size: 64px">404</h1>
    </div>
    <p class="mb-4">網址錯誤</p>

    <RouterLink :to="{ name: 'home' }" class="btn btn-outline-dark"
      >回到首頁</RouterLink
    >
  </div>
</template>
