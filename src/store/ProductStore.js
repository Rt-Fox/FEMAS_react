import {makeAutoObservable} from "mobx";

export  default class ProductStore {
    constructor() {
        this._product = [
            {id:1, name: 'Пуф золотой', price:'12 500 ₽', img: '/images/card-1.jpg'},
            {id:2, name: 'Пуф золотой', price:'12 500 ₽', img: '/images/card-1.jpg'},
            {id:3, name: 'Пуф золотой', price:'12 500 ₽', img: '/images/card-1.jpg'},
            {id:4, name: 'Пуф золотой', price:'12 500 ₽', img: '/images/card-1.jpg'},
            {id:5, name: 'Пуф золотой', price:'12 500 ₽', img: '/images/card-1.jpg'},
            {id:6, name: 'Пуф золотой', price:'12 500 ₽', img: '/images/card-1.jpg'},
            {id:7, name: 'Пуф золотой', price:'12 500 ₽', img: '/images/card-1.jpg'},
            {id:8, name: 'Пуф золотой', price:'12 500 ₽', img: '/images/card-1.jpg'},
            {id:9, name: 'Пуф золотой', price:'12 500 ₽', img: '/images/card-1.jpg'},
        ]

        makeAutoObservable(this)
    }
    setProduct(product) {
        this._product = product
    }
    get product() {
        return this._product
    }

}