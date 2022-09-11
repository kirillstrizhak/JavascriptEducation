'use strict';

//Домашнее задание 6
//Задача 1

const product = {
    productRender(item) {
        return `
    <tr>
    <td>${item.number}</td>
    <td>${item.name}</td>
    <td>${item.quantity}</td>
    <td>${item.price}</td>
    </tr>`
    }
}

const cartBlock = document.querySelector('#cart')

const cart = {

    products: [
        {
            number: 1,
            name: 'Ручка',
            quantity: 5,
            price: 25
        },
        {
            number: 2,
            name: 'Карандаш',
            quantity: 7,
            price: 20
        },
        {
            number: 3,
            name: 'Блокнот',
            quantity: 10,
            price: 35
        }
    ],

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

    clearCart() {
        this.products = []
        this.cartRender()
    },

    cartInit() {
        this.cartRender()
    },

    cartRender() {
        let cartTable = document.createElement('table')
        cartTable.className = 'cartTable'
        cartBlock.append(cartTable)
        cartBlock.insertAdjacentHTML('afterbegin', '')
        if (cart.products.length > 0) {
            cartTable.insertAdjacentHTML('afterbegin', `
    <tr class = "cartTabHead">
    <td>*</td>
    <td>Название</td>
    <td>Количество</td>
    <td>Цена/шт.</td>
    </tr>`)
            cartBlock.insertAdjacentHTML('beforeend', `<p>В корзине ${this.countProductsQuantity()} товаров общей стоимостью ${this.countCartPrice()}</p>`)

            let clearBtn = document.createElement('button')
            cartBlock.appendChild(clearBtn)
            clearBtn.className = 'deleteButton'
            clearBtn.innerText = 'Очистить'
            clearBtn.addEventListener('click', (e) => this.clearCart())

            for (let i = 0; i < this.products.length; i++) {
                cartTable.insertAdjacentHTML('beforeend', product.productRender(this.products[i]))
            }
        } else {
            cartBlock.innerHTML = '<p>Корзина пуста.</p>'
        }
    }
}

cart.cartInit()
