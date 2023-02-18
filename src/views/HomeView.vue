<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import NavBar from "../components/NavBar.vue";
</script>

<template>
  <main>
    <TheWelcome />
    <NavBar />
  </main>
  <section class="bg-accent mb-6">
    <div class="container-xxl py-6">
      <h1 class="text-center mb-5">
        <img class="me-3" src="../assets/logo.svg" style="width: 160px;">
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

  

  <section>
    <div style="background-image:url('../assets/img/homeBg.png'); height: 300px; width:100%"></div>
    <img style="height:300px" class="w-100 object-fit-cover" src="../assets/img/homeBg.png" alt="">
  </section>

  <section class="bg-primary mb-5 text-white">
    <div class="container-xxl py-6">
      <h1 class="text-center mb-5">
        <img class="me-3" src="../assets/logo.svg" style="width: 160px;">
        想跟你說
      </h1>
      <p class="text-center">
        滑板需要勇氣去嘗試，耐心去磨練技巧，認真練習才能進步，不要害怕失敗，我們會陪伴你努力
        <br>
        <span>相信你一定能越來越好</span>
      </p>
    </div>
  </section>

  <section class="bg-grey mb-5">
    <div class="container-xxl py-6">
      <h1 class="text-center mb-5">
        學員好評
      </h1>
      <p class="text-center">
        輪播圖還要做
      </p>
    </div>
  </section>

  <section class="container  mb-6">
    <div class="d-flex align-items-center mb-6">
      <img src="../assets/img/Home01.png" class="object-fit-cover" width="556px" height="400px">
      
      <div class="flex-grow-1 text-center ms-5 ">
        <h1 class="mb-4">小班制課程111</h1>
        <div class="mb-4" style="display:inline-block;  width:120px; height: 6px; background-color: #EFF249;"></div>
        <p class="mb-4">小班制的滑板課程，最多四人一組，是一個很好的機會讓你們互相交流、認識朋友。我們專業的老師會帶領你們學習滑板的基本技巧，並提供即時反饋和支援。在小班的氛圍中，你們不僅能學到新技能，還能建立真正的友誼</p>
        <button type="button" class="btn btn-accent">查看更多</button>
      </div>
    </div>

    <div class="d-flex align-items-center mt-6"> 
      <div class="flex-grow-1 text-center me-5">
        <h1 class="mb-4">一對一個人班</h1>
        <div class="mb-4" style="display:inline-block;  width:120px; height: 6px; background-color: #EFF249;"></div>
        <p class="mb-4">一對一的滑板課程，讓你有機會和專業的老師一起學習。我們的老師會手把手教學，讓你在學習過程中更加瞭解細節和動作。我們非常注重動作的精確性和細節，透過我們的課程，你將會學到正確的技巧，並能在未來的應用中取得更好的成效</p>
        <button type="button" class="btn btn-accent">查看更多</button>
      </div>

      <img src="../assets/img/homeBg.png" class="object-fit-cover" width="556px" height="400px">
    </div>
  </section>

  <footer class="bg-primary text-white py-5">
    <div class="container d-flex justify-content-between">
      <div class="d-flex flex-column justify-content-between">
      <img class="me-3" src="../assets/logo.svg" style="width: 160px;">
      <p>© 2023 Hedy All Rights Reserved.</p>
    </div>

    <div class="d-flex">
      <div class="me-5" >
        <p class="mb-3"><strong>聯絡我們</strong></p>
        <li class="mb-1">02-2344-2444</li>
        <li class="mb-1">service@zhelu.tw</li>
        <li class="mb-1">台北市仁愛區福人路73號</li>
      </div>
      
      <div>
        <p class="mb-3">社群媒體</p>
        <div class="text-white">
          <font-awesome-icon class="me-2" :icon="['fab', 'line']" />
          <font-awesome-icon class="me-2" :icon="['fab', 'youtube']" />
          <!-- <a href="#">
            <font-awesome-icon class="me-2" :icon="['fab', 'line']" />
          </a>
          <a href="#">
            <font-awesome-icon class="me-2" :icon="['fab', 'youtube']" />
          </a> -->
        </div>
      </div>
    </div>
    </div>
  </footer>

  <hr>



<!-- 課程頁面 -->
  <header>
    <div style="background-image: url('../assets/img/homeBg.png'); height:240px; width:100%; background-size: cover;" class="d-flex align-items-center justify-content-center w-100">
      <h1 class="display-1 text-white mb-6">所有課程</h1>
    </div>
  </header>

  <main class="bg-grey py-6">
    <div class="container">

      <nav class="nav nav-pills d-flex justify-content-center mb-5">
        <a class="nav-link active " href="#" aria-current="page">Active link</a>
        <a class="nav-link" href="#">Link</a>
      </nav>

      <div class="row row-cols-3">
        <div class="col">
          <div class="card border-0">
            <img src="../assets/img/Home02.png" class="card-img-top" alt="...">
            <div class="card-body bg-white">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn  btn-outline-dark w-100 text-center">Go somewhere</a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card border-0">
            <img src="../assets/img/Home02.png" class="card-img-top" alt="...">
            <div class="card-body bg-white">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn  btn-outline-dark w-100 text-center">Go somewhere</a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card border-0">
            <img src="../assets/img/Home02.png" class="card-img-top" alt="...">
            <div class="card-body bg-white">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn  btn-outline-dark w-100 text-center">Go somewhere</a>
            </div>
          </div>

        </div>
      </div>

      <nav aria-label="Page navigation example" class="mt-5 text-center">
        <ul class="pagination justify-content-center">
          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    </div>  
  </main>

  <!-- detail -->
<main class="bg-grey">
  <div class="container pt-4 pb-6 bg-grey">
    <button type="button" class="btn btn-outline-secondary">上一頁</button>
    <div class="d-flex pt-4 pb-5">
      <div class="d-flex flex-column">
      <img width="100px" height="75px" src="../assets/img/Home02.png" class="object-fit-contain border rounded mb-3" alt="" >
      <img width="100px" height="75px" src="../assets/img/Home02.png" class="object-fit-contain border rounded mb-3" alt="" >
      <img width="100px" height="75px" src="../assets/img/Home02.png" class="object-fit-contain border rounded mb-3" alt="" >
      </div>

      <img width="600px" height="400px" src="../assets/img/Home01.png" class="border ms-3" alt="">
    
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
              <button class="btn btn-outline-secondary" type="button">Button</button>
              <input id="qtyInput" type="text" class="form-control">
              <button class="btn btn-outline-secondary" type="button">Button</button>
          </div>
        </div>
        <p class="text-secondary">剩餘人數: <span>8</span></p>

        <div class="d-flex flex-column">
          <button type="submit" class="btn btn-accent btn-lg  mt-5 mb-2">Submit</button>
        <button type="submit" class="btn btn-outline-dark btn-lg">Submit</button>
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
  
<!-- cart -->








</template>
