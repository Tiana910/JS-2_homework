'use strict'


const goods = [
    { id: 1, title: 'Notebook', price: 2000 },
    { id: 2, title: 'Mouse', price: 20 },
    { id: 3, title: 'Keyboard', price: 200 },
    { id: 4, title: 'Gamepad', price: 50 },
];

const renderGoodsItem = (title, price, img) => {
    return `<div class="goods-item">
    <img src="img/goods2.jpg"<br>
    <h3>${title}</h3>
    <p>${price}</p>
    <button class="cart-button">Купить</button>
    </div>`;
};

const renderGoodsList = (list) => {
    let goodList = list.map(item => renderGoodsItem(item.title, item.price)).join('');
    console.log(goodList);
    document.querySelector('.goods-list').innerHTML = goodList;
}

renderGoodsList(goods);



