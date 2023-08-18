<template>
  <div class="bg-grey pb-4 flex-grow-1">
    <div class="container-xxl pt-4">
      <div class="bg-white p-4 rounded d-flex flex-column align-items-center">
        <font-awesome-icon
          class="text-success mb-3"
          :icon="['fas', 'circle-check']"
          style="height: 120px"
        />

        <H4 class="mb-3">已送出訂單</H4>
        <p class="mb-3">訂單資料將寄送到您的信箱</p>
        <RouterLink
          type="button"
          class="btn btn-outline-dark"
          :to="{ name: 'class' }"
        >
          回到所有課程
        </RouterLink>
      </div>
    </div>
  </div>
</template>
