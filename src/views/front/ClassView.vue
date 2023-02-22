<template>
  <header>
    <div
      style="
        background-image: url('../src/assets/img/homeBg.png');
        height: 240px;
        width: 100%;
        background-size: cover;
      "
      class="d-flex align-items-center justify-content-center"
    >
      <h1 class="display-1 text-white" style="text-shadow: 2px 3px 5px #4d4d4d">
        所有課程
      </h1>
    </div>
  </header>

  <main class="bg-grey py-5">
    <div class="container">
      <nav class="nav nav-pills d-flex justify-content-center mb-5">
        <a class="nav-link active" href="#" aria-current="page">團體班</a>
        <a class="nav-link" href="#">個人班</a>
      </nav>

      <div class="row row-cols-3">
        <div class="col">
          <div class="card border-0">
            <img src="@/assets/img/Home02.png" class="card-img-top" alt="..." />
            <div class="card-body bg-white">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-outline-dark w-100 text-center"
                >Go somewhere</a
              >
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card border-0">
            <img src="@/assets/img/Home02.png" class="card-img-top" alt="..." />
            <div class="card-body bg-white">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-outline-dark w-100 text-center"
                >Go somewhere</a
              >
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card border-0">
            <img src="@/assets/img/Home02.png" class="card-img-top" alt="..." />
            <div class="card-body bg-white">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-outline-dark w-100 text-center"
                >Go somewhere</a
              >
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
</template>
