<template>
  <img
    src="@/assets/img/home/hero.png"
    class="vh-100 w-100 object-fit-cover d-none d-xl-inline-block"
  />
  <img
    src="@/assets/img/home/tableHero.png"
    class="vh-100 w-100 object-fit-cover d-none d-xl-none d-md-inline-block"
  />
  <img
    src="@/assets/img/home/mobileHero.png"
    class="vh-100 w-100 object-fit-cover d-md-none d-xl-none"
  />
  <section class="bg-accent">
    <div class="container py-6">
      <h1 class="text-center mb-5">
        <img
          class="me-3"
          src="@/assets/img/home/logoBlack.svg"
          style="width: 160px"
        />
        滑板課程
      </h1>
      <div class="d-flex text-center align-items-center row">
        <div class="col-md col-12 mb-md-0">
          <h4 class="mb-3">專業師資</h4>
          <p>擁有專業和十年經驗的師資團隊，能夠為學員提供高品質的教學</p>
        </div>

        <div class="text-center d-md-none mb-4">
          <div
            class="bg-primary d-inline-block"
            style="height: 1px; width: 160px"
          ></div>
        </div>

        <div class="col-1 text-center d-md-block d-none">
          <div
            class="bg-primary d-inline-block"
            style="height: 100px; width: 1px"
          ></div>
        </div>

        <div class="col-12 col-md mb-md-0">
          <h4 class="mb-3">學員好評</h4>
          <p>
            課程擁有高達 95%
            的滿意度，是學習長板的最佳選擇，能夠滿足學員的各種需求
          </p>
        </div>

        <div class="text-center d-md-none mb-4">
          <div
            class="bg-primary d-inline-block"
            style="height: 1px; width: 160px"
          ></div>
        </div>

        <div class="col-1 text-center d-md-block d-none">
          <div
            class="bg-primary d-inline-block"
            style="height: 100px; width: 1px"
          ></div>
        </div>

        <div class="col-12 col-md mb-md-0">
          <h4 class="mb-3">安全快樂</h4>
          <p>
            我們非常重視安全，會在教學過程中也會確保學員學習安全，並幫每位學員保險
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="container py-6">
    <div class="row d-flex align-items-center mb-6">
      <div class="col-md-6 mb-4">
        <div class="ratio ratio-4x3">
          <img
            src="@/assets/img/home/Home01.png"
            class="object-fit-cover img-fluid"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="flex-grow-1 text-center ms-mb-5">
          <h1 class="mb-4">小班制課程</h1>
          <div
            class="mb-4"
            style="
              display: inline-block;
              width: 120px;
              height: 6px;
              background-color: #eff249;
            "
          ></div>
          <p class="mb-4">
            小班制的滑板課程，最多四人一組，是一個很好的機會讓你們互相交流、認識朋友。我們專業的老師會帶領你們學習滑板的基本技巧，並提供即時反饋和支援。在小班的氛圍中，你們不僅能學到新技能，還能建立真正的友誼
          </p>
          <RouterLink
            class="btn btn-accent border border-dark"
            :to="{ name: 'class' }"
          >
            查看更多
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="row d-flex align-items-center">
      <div class="col-md-6 d-md-none mb-4">
        <div class="ratio ratio-4x3">
          <img
            src="@/assets/img/home/Home02.png"
            class="object-fit-cover img-fluid"
          />
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="flex-grow-1 text-center ms-mb-5">
          <h1 class="mb-4">一對一個人班</h1>
          <div
            class="mb-4"
            style="
              display: inline-block;
              width: 120px;
              height: 6px;
              background-color: #eff249;
            "
          ></div>
          <p class="mb-4">
            一對一的滑板課程，讓你有機會和專業的老師一起學習。我們的老師會手把手教學，讓你在學習過程中更加瞭解細節和動作。我們非常注重動作的精確性和細節，透過我們的課程，你將會學到正確的技巧，並能在未來的應用中取得更好的成效
          </p>
          <RouterLink
            class="btn btn-accent border border-dark"
            :to="{ name: 'class' }"
          >
            查看更多
          </RouterLink>
        </div>
      </div>
      <div class="col-md-6 d-none d-md-block">
        <div class="ratio ratio-4x3">
          <img
            src="@/assets/img/home/Home02.png"
            class="object-fit-cover img-fluid"
          />
        </div>
      </div>
    </div>
  </section>

  <section
    style="
      background-image: url(~@/assets/img/home/homeBg.png);
      height: 300px;
      width: 100%;
      background-position: center 60%;
    "
  ></section>

  <section class="bg-grey text-dark">
    <div class="container-xxl py-6">
      <h1 class="text-center mb-5">
        <img
          class="me-3"
          src="@/assets/img/home/logoBlack.svg"
          style="width: 160px"
        />
        想跟你說
      </h1>
      <p class="text-center">
        滑板需要勇氣去嘗試，耐心去磨練技巧，認真練習才能進步，不要害怕失敗，我們會陪伴你努力
        <br />
        <span>相信你一定能越來越好</span>
      </p>
    </div>
  </section>
</template>
