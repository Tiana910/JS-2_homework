'use strict'

class ProductList {
    constructor(container = '.goods-list') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render();
    }


    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Mouse', price: 20 },
            { id: 3, title: 'Keyboard', price: 200 },
            { id: 4, title: 'Gamepad', price: 50 },
        ]
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.innerHTML += item.render();

        }
    }
    getSum() {
        for (let good of this.goods) {
            sum += item.price;
            alert(Sum);
        }
    }

}


class ProductItem {
    constructor(product, img = "img/goods2.jpg") {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render() {
        return `<div class="product-item">
             <img src="${this.img}">
             <h3>${this.title}</h3>
             <p>${this.price}</p>
             <button class="cart-button">Купить</button>
         </div>`
    }

}

let list = new ProductList();






class Basket {
    addGood() {

    }
    removeGood() {

    }
    changeGood() {

    }
    render() {

    }
}

class ElementBasket {
    render() {

    }
}