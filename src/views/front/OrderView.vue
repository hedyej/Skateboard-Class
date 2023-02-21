<template>
    <div class="bg-grey py-4">
        <div class="container">
            <button type="button" class="btn btn-outline-dark border-0 mb-3"> 
            <font-awesome-icon class="me-2 " :icon="['fas', 'arrow-left']" />
            上一頁
            </button>

            <div class="bg-white p-4 rounded">
            <div class="bg-white rounded">
                <h1 class="mb-4">結帳</h1>
                <h4 class="mb-4">訂單內容</h4>
                <table class="table bg-white table-striped table-hover align-middle rounded">
                <thead>
                    <tr>
                    <th scope="col"></th>
                    <th scope="col">名稱</th>
                    <th scope="col">價格</th>
                    <th scope="col">數量</th>
                    <th scope="col">合計</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">
                        <img src="../assets/img/Home02.png" height="100px" width="100px" class="object-fit-cover">
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
                        <input id="qtyInput" type="text" class="form-control">
                        <button class="btn btn-outline-secondary" type="button">
                            <font-awesome-icon  :icon="['fas', 'plus']" />
                        </button>
                        </div>
                    </td>
                    <td>NT$ 1500</td>
                    </tr>
                </tbody>
                </table>

                <h4 class="text-end">總計 NT$ 1000 </h4>
            
                <hr class="my-5">

                <h4 class="mb-4">付款資訊</h4>
                <form action="">
                <div class="row">
                    <div class="col-4">
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">付款人</label>
                        <input type="text" class="form-control" id="formGroupExampleInput">
                    </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-4">
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">信箱</label>
                        <input type="text" class="form-control" id="formGroupExampleInput">
                    </div>
                    </div>
                </div>

                <div class="row">  
                    <div class="col-4">
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">電話</label>
                        <input type="text" class="form-control" id="formGroupExampleInput">
                    </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-8">
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">地址</label>
                        <input type="text" class="form-control" id="formGroupExampleInput">
                    </div>
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-8">
                    <label for="formGroupExampleInput" class="form-label">付款方式</label>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                        <label class="form-check-label" for="flexRadioDefault1">
                        已ATM轉帳
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                        <label class="form-check-label" for="flexRadioDefault2">
                        課後現金付款
                        </label>
                    </div>
                    </div>
                </div>
                
                <div class="row mb-3">
                    <div class="col-8">
                    <label for="exampleFormControlTextarea1" class="form-label">留言</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>

                <button type="button" class="btn btn-accent border border-dark">送出訂單</button>
                </form>
            </div>
            </div>
        </div>
    </div>
</template>
