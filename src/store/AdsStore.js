import {makeAutoObservable} from "mobx";

export  default class AdsStore {
    constructor() {
        this._ads = [
            {uuid: 1, title: 'МЫ СОЗДАЕМ УЮТ', photo: "./images/rectangle37.png", main:true},
            {uuid: 2, title: 'Скидка 20% ПРИ ЗАКАЗЕ НА САЙТЕ', photo: "./images/Rectangle.jpg", main:false},
            {uuid: 3, title: 'Обеденные группы', photo: "./images/rectangle9.png", main:false},
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