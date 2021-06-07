import {makeAutoObservable} from "mobx";

export  default class BasketStore {
    constructor() {
        this._basket= [
            // {
            //     uuid: "e7fde4f7-7d0e-451e-ba1e-c20824c00e7b",
            //     name: "Диван для теста опций",
            //     price: "2400",
            //     count: "2",
            //     class_name: "Sofa",
            //     description: "Потестим опции",
            //     main_photo: "/images/card-1.jpg",
            //     photos: [
            //     "http://127.0.0.1:8000/femas/media/product_photos/Screenshot_69_96iNEnj.png"
            //     ],
            //     videos: [],
            //     mechanism: "хороший",
            //     collection: "2020",
            //     options: [
            //         {
            //             uuid: "6bc3ad76-f048-4979-8fc0-de9ded4ad616",
            //             size: "king size",
            //             class_name: "SofaOption"
            //         },
            //         {
            //             uuid: "d18d15c3-4f51-4e69-82ba-dc2cfc8969c7",
            //             size: "queen size",
            //             class_name: "SofaOption"
            //         }
            //     ]
            // },
            // {
            //     uuid: "e7fde4f7-7d0e-451e-ba1e-c20824c00eb",
            //     name: "Диван для теста опций",
            //     price: "2400",
            //     count: "1",
            //     class_name: "Sofa",
            //     description: "Потестим опции",
            //     main_photo: "/images/card-1.jpg",
            //     photos: [
            //     "http://127.0.0.1:8000/femas/media/product_photos/Screenshot_69_96iNEnj.png"
            //     ],
            //     videos: [],
            //     mechanism: "хороший",
            //     collection: "2020",
            //     options: [
            //         {
            //             uuid: "6bc3ad76-f048-4979-8fc0-de9ded4ad616",
            //             size: "king size",
            //             class_name: "SofaOption"
            //         },
            //         {
            //             uuid: "d18d15c3-4f51-4e69-82ba-dc2cfc8969c7",
            //             size: "queen size",
            //             class_name: "SofaOption"
            //         }
            //     ]
            // }
        ]
        makeAutoObservable(this)
    }
    setBasket(basket) {
        this._basket = basket
        localStorage.setItem('basket', JSON.stringify(this._basket));
    }
    setPushBasket(element, uuid) {
        let flag = this._basket.find((item) => item.uuid === uuid)
        if (flag) {
            flag.count++
        } else {
            element.count = "1"
            this._basket.push(element)
        }
        localStorage.setItem('basket', JSON.stringify(this._basket));
    }
    setBasketCountPlus(uuid) {
        this._basket.find((item) => item.uuid === uuid).count++
        localStorage.setItem('basket', JSON.stringify(this._basket));
    }
    setBasketCountMinus(uuid) {
        this._basket.find((item) => item.uuid === uuid).count--
        localStorage.setItem('basket', JSON.stringify(this._basket));
    }
    setBasketDelete(element) {
        this._basket.splice(this._basket.indexOf(element),1)
        localStorage.setItem('basket', JSON.stringify(this._basket));
    }
    get basket() {
        return this._basket
    }
    get totalCount() {
        let count = 0;
        this._basket.forEach(item => (count -= -item.count))
        return count
    }
    get totalPrice() {
        let price = 0;
        this._basket.forEach(item => (price += item.price*item.count))
        return price
    }

}