'use strict';

//Домашнее задание 6
//Задача 1

const product = {
    productRender(item) {
        return `
    <tr>
    <td><img class = "itemImg" src = "${item.img}"></img></td>
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>${item.price}</td>
    </tr>`
    }
}

const cart = {

    products: [],

    countCartPrice() {
        let cartPrice = 0;
        for (let i = 0; i < this.products.length; i++) {
            cartPrice += this.products[i].quantity * this.products[i].price;
        };
        return cartPrice;
    },

    countProductsQuantity() {
        return this.products.length;

    },

    addToCart(product) {
        const existProduct = this.products.find(item => item.id == product.id)
        if (existProduct) {
            product.quantity++
        } else {
            product.quantity = 1
            cart.products.push(product)
        }
        cart.cartRender()
    },

    clearCart() {
        this.products = []
        this.cartRender()
    },

    cartInit() {
        this.cartRender()
    },

    cartRender() {
        const cartBlock = document.querySelector('#cart')
        cartBlock.innerHTML = ''
        let cartTable = document.createElement('table')
        cartTable.className = 'productsTable'
        cartBlock.append(cartTable)

        if (cart.products.length > 0) {

            cartBlock.insertAdjacentHTML('beforeend', `<p>В корзине ${this.countProductsQuantity()} товаров общей стоимостью ${this.countCartPrice()}</p>`)

            let clearBtn = document.createElement('button')
            cartBlock.appendChild(clearBtn)
            clearBtn.className = 'deleteButton'
            clearBtn.innerText = 'Очистить'
            clearBtn.addEventListener('click', (e) => this.clearCart())

            for (let i = 0; i < this.products.length; i++) {
                cartTable.insertAdjacentHTML('afterbegin', `${product.productRender(this.products[i])}`)
            }
            cartTable.insertAdjacentHTML('afterbegin', `
        <tr class = "productsTabHead">
        <td></td>
        <td>Название</td>
        <td>Количество</td>
        <td>Цена/шт.</td>
        <td></td>
        </tr>`)
        } else {
            cartBlock.innerHTML = '<p>Корзина пуста.</p>'
        }
    }
}

const catalog = {
    products: [
        {
            id: 1,
            name: 'IPhone XR',
            quantity: 1,
            img: 'img/iphonexr.jpg',
            price: 45590
        },
        {
            id: 2,
            name: 'Iphone 11 Pro MAX',
            quantity: 1,
            img: 'img/iphone11.jpg',
            price: 56999
        },
        {
            id: 3,
            name: 'IPhone 12 Pro',
            quantity: 1,
            img: 'img/iphone12.jpg',
            price: 86229
        },
    ],

    catalogInit() {
        this.catalogRender()
    },

    catalogRender() {
        const catalogBlock = document.querySelector('#catalog')
        catalogBlock.insertAdjacentHTML('afterbegin', 'Каталог товаров')
        let catalogTable = document.createElement('table')
        catalogTable.className = 'productsTable'
        catalogBlock.append(catalogTable)
        catalogTable.insertAdjacentHTML('afterbegin', `
        <tr class = "productsTabHead catalogTab">
        <td></td>
        <td>Название</td>
        <td>Наличие</td>
        <td>Цена/шт.</td>
        <td></td>
        </tr>`)

        for (let i = 0; i < this.products.length; i++) {
            catalogTable.insertAdjacentHTML('beforeend', `<tr>
            <td><img class = "itemImg" src = "${this.products[i].img}"></img></td>
            <td>${this.products[i].name}</td>
            <td>Есть в наличии</td>
            <td>${this.products[i].price}</td>
            <td><button id = buy-btn class = "buyButton item${(i + 1)}">Купить</button></td>
            </tr>`)
        }

        let buyButtonXR = document.querySelector('.item1')
        buyButtonXR.addEventListener('click', (e) => cart.addToCart(this.products[0]))

        let buyButton11 = document.querySelector('.item2')
        buyButton11.addEventListener('click', (e) => cart.addToCart(this.products[1]))

        let buyButton12 = document.querySelector('.item3')
        buyButton12.addEventListener('click', (e) => cart.addToCart(this.products[2]))

    }
}

catalog.catalogInit()
cart.cartInit()
