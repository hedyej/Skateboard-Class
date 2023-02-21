<template>
  <main>

  </main>
  <section class="bg-accent">
    <div class="container-xxl py-6">
      <h1 class="text-center mb-5">
        <img class="me-3" src="@/assets/logo.svg" style="width: 160px;">
        滑板課程
      </h1>
      <div class="d-flex text-center align-items-center">
        <div class="pe-5">
          <H4 class="mb-3">專業師資</H4>
          <p>
            擁有專業和十年經驗的師資團隊，能夠為學員提供高品質的教學
          </p>
        </div>

        <div class="bg-primary" style="height:100px; width:1px;">
        </div>

        <div class="px-5">
          <H4 class="mb-3">學員好評</H4>
          <p>
            課程擁有高達 95% 的滿意度，是學習長板的最佳選擇，能夠滿足學員的各種需求
          </p>
        </div>

        <div class="bg-primary" style="height:100px; width:1px;">
        </div>

        <div class="ps-5">
          <H4 class="mb-3">專業師資</H4>
          <p>
            我們非常重視安全，會在教學過程中也會確保學員學習安全，並幫每位學員保險
          </p>
        </div>

      </div>
    </div>
  </section>

  <section class="container  py-6">
    <div class="d-flex align-items-center mb-6">
      <img src="@/assets/img/Home01.png" class="flex-grow-0 object-fit-cover" width="556px" height="400px">
      
      <div class="flex-grow-1 text-center ms-5 ">
        <h1 class="mb-4">小班制課程111</h1>
        <div class="mb-4" style="display:inline-block;  width:120px; height: 6px; background-color: #EFF249;"></div>
        <p class="mb-4">小班制的滑板課程，最多四人一組，是一個很好的機會讓你們互相交流、認識朋友。我們專業的老師會帶領你們學習滑板的基本技巧，並提供即時反饋和支援。在小班的氛圍中，你們不僅能學到新技能，還能建立真正的友誼</p>
        <button type="button" class="btn btn-accent border border-dark">查看更多</button>
      </div>
    </div>

    <div class="d-flex align-items-center mt-6"> 
      <div class="flex-grow-1 text-center me-5">
        <h1 class="mb-4">一對一個人班</h1>
        <div class="mb-4" style="display:inline-block;  width:120px; height: 6px; background-color: #EFF249;"></div>
        <p class="mb-4">一對一的滑板課程，讓你有機會和專業的老師一起學習。我們的老師會手把手教學，讓你在學習過程中更加瞭解細節和動作。我們非常注重動作的精確性和細節，透過我們的課程，你將會學到正確的技巧，並能在未來的應用中取得更好的成效</p>
        <button type="button" class="btn btn-accent border border-dark">查看更多</button>
      </div>

      <img src="@/assets/img/homeBg.png" class="object-fit-cover" width="556px" height="400px">
    </div>
  </section>

  <section>
    <div style="background-image:url('../src/assets/img/homeBg.png'); height: 400px; width:100%; background-position: 70% center;"></div>
  </section>

  <section class="bg-primary text-white">
    <div class="container-xxl py-6">
      <h1 class="text-center mb-5">
        <img class="me-3" src="@/assets/logo.svg" style="width: 160px;">
        想跟你說
      </h1>
      <p class="text-center">
        滑板需要勇氣去嘗試，耐心去磨練技巧，認真練習才能進步，不要害怕失敗，我們會陪伴你努力
        <br>
        <span>相信你一定能越來越好</span>
      </p>
    </div>
  </section>

  <section class="bg-grey">
    <div class="container-xxl py-6">
      <h1 class="text-center mb-5">
        學員好評
      </h1>
      <p class="text-center">
        輪播圖還要做
      </p>
    </div>
  </section>
</template>

<script>
import NavBar from "../../components/global/NavBar.vue";

export default {
  components:{NavBar}
}
</script>