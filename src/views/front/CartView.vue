<template>
    <main class="bg-grey">
        <div class="container py-4">
            <h1>購物車</h1>
            <div class="text-end">
            <button type="button" class="btn btn-outline-dark mb-3">刪除全部</button>
            </div>

            <table class="table bg-white table-striped table-hover align-middle rounded">
            <thead>
                <tr>
                <th scope="col"></th>
                <th scope="col">名稱</th>
                <th scope="col">價格</th>
                <th scope="col">數量</th>
                <th scope="col">合計</th>
                <th scope="col">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">
                    <img src="@/assets/img/Home02.png" height="100px" width="100px" class="object-fit-cover">
                </th>
                <td class="fw-bold">團體進階班(6人)</td>
                <td>
                    <div class="d-flex flex-column">
                    <span>NT$ 1000 / 人</span>
                    <del class="text-secondary">NT$ 1500</del>
                    </div>
                </td>
                <td>
                    <div class="input-group input-group-sm" style="width: 200px;">
                    <button class="btn btn-outline-secondary" type="button">
                        <font-awesome-icon  :icon="['fas', 'minus']" />
                    </button>
                    <input id="qtyInput" type="text" class="form-control border border-secondary">
                    <button class="btn btn-outline-secondary" type="button">
                        <font-awesome-icon  :icon="['fas', 'plus']" />
                    </button>
                    </div>
                </td>
                <td>NT$ 1500</td>
                <td>
                    <font-awesome-icon class="me-4" :icon="['fas', 'pen']" />
                    <font-awesome-icon class="me-2" :icon="['fas', 'trash-can']" />
                </td>
                </tr>
            </tbody>
            </table>
            <div class="text-end">
            <h4 class="mb-4">總計 NT$ 1000 </h4>
            <button type="button" class="btn btn-accent border border-dark">立即結帳</button>
            </div>
        </div>
    </main>
</template>