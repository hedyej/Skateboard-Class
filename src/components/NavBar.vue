<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-xxl">
            <a class="navbar-brand" href="#">
                <img src="../assets/logo.svg">
            </a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item mx-3">
                <a class="nav-link active" aria-current="page" href="#">所有課程</a>
                </li>
            </ul>
            <a href="" class="text-white me-3">
                <font-awesome-icon :icon="['fas', 'cart-shopping']" />
            </a>
            <button type="button" class="btn btn-outline-light mx-3">
                <font-awesome-icon class="me-2" :icon="['fas', 'user']" />
                <span>
                    管理員登入
                </span>
            </button>
        </div>
    </nav>
    <hr>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-xxl">
            <a class="navbar-brand" href="#">
                <img src="../assets/logo.svg">
            </a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item mx-3">
                <a class="nav-link active" aria-current="page" href="#">儀表板</a>
                </li>
                <li class="nav-item mx-3">
                <a class="nav-link active" aria-current="page" href="#">課程管理</a>
                </li>
                <li class="nav-item mx-3">
                <a class="nav-link active" aria-current="page" href="#">訂單管理</a>
                </li>
            </ul>
            <a href="" class="text-white me-4">
                <font-awesome-icon :icon="['fas', 'cart-shopping']" />
            </a>
            <div class="btn-group">
                <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <font-awesome-icon class="me-2" :icon="['fas', 'user']" />
                    <span>
                        管理員
                    </span>
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">登出</a></li>
                </ul>
                </div>
        </div>
    </nav>
</template>



<script>
    export default {
        name:"NavBar"
    }
</script>