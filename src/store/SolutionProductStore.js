import {makeAutoObservable} from "mobx";

export  default class SolutionProductStore {
    constructor() {
        this._product = [
            {id:1, name: 'Пуф золотой', price:'12 500 ₽', image: '/images/rectangle24.png'},
            {id:2, name: 'Пуф золотой', price:'12 500 ₽', image: '/images/rectangle25.png'},
            {id:3, name: 'Пуф золотой', price:'12 500 ₽', image: '/images/rectangle26.png'},
            {id:4, name: 'Пуф золотой', price:'12 500 ₽', image: '/images/rectangle27.png'},
            {id:5, name: 'Пуф золотой', price:'12 500 ₽', image: '/images/rectangle24.png'},
            {id:6, name: 'Пуф золотой', price:'12 500 ₽', image: '/images/rectangle24.png'},
            {id:7, name: 'Пуф золотой', price:'12 500 ₽', image: '/images/rectangle24.png'},
            {id:8, name: 'Пуф золотой', price:'12 500 ₽', image: '/images/rectangle24.png'},
            {id:9, name: 'Пуф золотой', price:'12 500 ₽', image: '/images/rectangle24.png'},
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