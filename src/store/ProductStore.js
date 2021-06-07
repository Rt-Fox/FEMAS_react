import {makeAutoObservable} from "mobx";
//все продукты хранятся тут
export  default class ProductStore {
    constructor() {
        this._product = [
            {uuid:1, name: 'Пуф золотой', price:'12 500 ₽', img: '/images/card-1.jpg',},
            {uuid:2, name: 'Пуф золотой', price:'12 500 ₽', img: '/images/card-1.jpg'},
            {uuid:3, name: 'Пуф золотой', price:'12 500 ₽', img: '/images/card-1.jpg'},
            {uuid:4, name: 'Пуф золотой', price:'12 500 ₽', img: '/images/card-1.jpg'},
            {uuid:5, name: 'Пуф золотой', price:'12 500 ₽', img: '/images/card-1.jpg'},
            {uuid:6, name: 'Пуф золотой', price:'12 500 ₽', img: '/images/card-1.jpg'},
            {uuid:7, name: 'Пуф золотой', price:'12 500 ₽', img: '/images/card-1.jpg'},
            {uuid:8, name: 'Пуф золотой', price:'12 500 ₽', img: '/images/card-1.jpg'},
            {uuid:9, name: 'Пуф золотой', price:'12 500 ₽', img: '/images/card-1.jpg'},
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