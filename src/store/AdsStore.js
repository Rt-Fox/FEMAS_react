import {makeAutoObservable} from "mobx";

export  default class AdsStore {
    constructor() {
        this._ads = [
            {id: 1, title: 'МЫ СОЗДАЕМ УЮТ', img: "./images/rectangle37.png", main:true},
            {id: 2, title: 'Скидка 20% ПРИ ЗАКАЗЕ НА САЙТЕ', img: "./images/Rectangle.jpg", main:false},
            {id: 3, title: 'Обеденные группы', img: "./images/rectangle9.png", main:false},
        ]
        makeAutoObservable(this)
    }
    setAds(ads) {
        this._ads = ads
    }
    get ads() {
        return this._ads
    }

}