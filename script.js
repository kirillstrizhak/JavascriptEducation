'use strict';


const product = {
    productRender(item) {
        return `
    <tr>
    <td><img class = "itemImg" src = "${item.img}"></img></td>
            <td>${item.name}</td>
            <td><button class = "itemBtn btn-remove${item.id}">-</button>${item.quantity} шт. <button class = "itemBtn btn-add${item.id}">+</button></td>
            <td>${item.price} ₽</td>
            <td><button class = "deleteButton delItem${item.id}">X</button></td>
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

    removeFromCart(product) {
        const existProduct = this.products.find(item => item.id == product.id)
        if (existProduct && product.quantity > 1) {
            product.quantity--
        } else {
            product.quantity = 1
            cart.products.pop(product)
        }

        cart.cartRender()
    },

    deleteFromCart(product) {
        cart.products.pop(product)
        cart.cartRender()
    },

    clearCart() {
        this.products = []
        this.cartRender()
    },

    cartInit() {
        let parentBlock = document.querySelector('.container')
        let nextBtn = document.createElement('button')
        nextBtn.className = 'buyButton'
        nextBtn.innerText = 'Далее'
        parentBlock.append(nextBtn)
        nextBtn.addEventListener('click', (e) => adress.adressInit())
        this.cartRender()
    },

    cartRender() {
        const cartBlock = document.querySelector('#cart')
        cartBlock.innerHTML = ''
        let cartTable = document.createElement('table')
        cartTable.className = 'productsTable'
        cartBlock.append(cartTable)

        if (cart.products.length > 0) {
            cartBlock.insertAdjacentHTML('afterbegin', '<p style = "background: rgb(147, 232, 19); padding: 10px; font-weight: bold;">Ваша корзина</p>')
            cartBlock.insertAdjacentHTML('beforeend', `<p>В корзине ${this.countProductsQuantity()} товаров общей стоимостью ${this.countCartPrice()}</p>`)

            let clearBtn = document.createElement('button')
            cartBlock.appendChild(clearBtn)
            clearBtn.className = 'deleteButton'
            clearBtn.innerText = 'Очистить'
            clearBtn.addEventListener('click', (e) => this.clearCart())

            for (let i = 0; i < this.products.length; i++) {
                cartTable.insertAdjacentHTML('beforeend', `${product.productRender(this.products[i])}`)
                let itemAddBtn = document.querySelector(`.btn-add${this.products[i].id}`)
                itemAddBtn.addEventListener('click', (e) => this.addToCart(this.products[i]))
                let itemRemBtn = document.querySelector(`.btn-remove${this.products[i].id}`)
                itemRemBtn.addEventListener('click', (e) => this.removeFromCart(this.products[i]))
                let itemDelBtn = document.querySelector(`.delItem${this.products[i].id}`)
                itemDelBtn.addEventListener('click', (e) => this.deleteFromCart(this.products[i]))
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
            cartBlock.innerHTML = '<p style = "background: rgb(188, 188, 188); padding: 10px; font-weight: bold;">Ваша корзина пуста.</p>'
        }
    },

    clearCartPage() {
        const cartBlock = document.querySelector('#cart')
        cartBlock.remove()
    }
}

const catalog = {
    products: [
        {
            id: 1,
            name: 'IPhone XR',
            quantity: 1,
            img: 'img/iphonexr.jpg',
            color: 'Голубой',
            price: 45590
        },
        {
            id: 2,
            name: 'IPhone 11 Pro MAX',
            quantity: 1,
            img: 'img/iphone11.jpg',
            color: 'Чёрный',
            price: 56999
        },
        {
            id: 3,
            name: 'IPhone 12 Pro',
            quantity: 1,
            img: 'img/iphone12.jpg',
            color: 'Золотой',
            price: 86229
        },
        {
            id: 4,
            name: 'Микроволновка',
            quantity: 1,
            img: 'img/microwaver.png',
            color: 'Белый',
            price: 21600
        },
    ],

    catalogInit() {
        this.catalogRender()
    },

    catalogRender() {
        const catalogBlock = document.querySelector('#catalog')
        catalogBlock.insertAdjacentHTML('afterbegin', '<p style = "background: rgb(100, 164, 233); padding: 10px; font-weight: bold;">Каталог товаров</p>')
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
            <td>${this.products[i].price} ₽</td>
            <td><button id = buy-btn class = "buyButton item${(this.products[i].id)}">Купить</button></td>
            </tr>`)

            let buyButton = document.querySelector(`.item${this.products[i].id}`)
            buyButton.addEventListener('click', (e) => cart.addToCart(this.products[i]))
        }

    },

    clearCatalogPage() {
        const catalogBlock = document.querySelector('#catalog')
        catalogBlock.remove()
    }
}

catalog.catalogInit()
cart.cartInit()

const adress = {
    adressInit() {
        this.clearPage()
        this.renderAdress()
    },

    clearPage() {
        cart.clearCartPage()
        catalog.clearCatalogPage()
    },

    renderAdress() {
        let nextBtnRemove = document.querySelector('.buyButton')
        nextBtnRemove.remove()
        let parent = document.querySelector('.container')
        let adressBlock = document.createElement('div')
        adressBlock.className = 'blank'
        parent.append(adressBlock)
        adressBlock.insertAdjacentHTML('afterbegin', `
        Страна <input style = "margin-bottom: 15px; padding: 5px;" type="text" placeholder = "Введите страну"></input>
        Город<input style = "margin-bottom: 15px; padding: 5px;" type="text" placeholder = "Введите город"></input>
        Улица <input style = "margin-bottom: 15px; padding: 5px;" type="text" placeholder = "Введите улицу"></input>
        Почтовый индекс <input style = "margin-bottom: 15px; padding: 5px;" type="text" placeholder = "Почтовый индекс"></input>
        Имя <input style = "margin-bottom: 15px; padding: 5px;" type="text" placeholder = "Введите имя"></input>
        <button class = "buyButton" style = "margin-top:15px; action = "submit">Далее</button>
        `)

        let nextBtn = document.querySelector('.buyButton')
        nextBtn.addEventListener('click', (e) => comment.commentInit())
    },

    clearPageAdress() {
        let adressBlock = document.querySelector('.blank')
        adressBlock.remove()
    }
}

const comment = {

    commentInit() {
        this.clearPage()
        this.renderComment()
    },

    clearPage() {
        adress.clearPageAdress()
    },

    renderComment() {
        let parent = document.querySelector('.container')
        let commentBlock = document.createElement('div')
        commentBlock.className = 'blank'
        parent.append(commentBlock)
        commentBlock.insertAdjacentHTML('afterbegin', `
        <input style = "width: 600px; height: 100px; padding: 10px;" type = "text" placeholder = "Введите комментарий"></input>
        <button class = "buyButton" style = "margin-top:15px; action = "submit">Далее</button>
        `)
    },

    clearPageComment() {
        let commentBlock = document.querySelector('.blank')
        commentBlock.remove()
    }

}
