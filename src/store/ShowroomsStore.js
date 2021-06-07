import {makeAutoObservable} from "mobx";

export  default class ShowroomsStore {
    constructor() {
        this._first = [
            {id:1, img: '/images/Showrooms.png'},
            {id:2, img: '/images/Showrooms.png'},
            {id:3, img: '/images/Showrooms.png'},
            {id:4, img: '/images/Showrooms.png'},
            {id:5, img: '/images/Showrooms.png'},
            {id:6, img: '/images/Showrooms.png'},
            {id:7, img: '/images/Showrooms.png'},
            {id:8, img: '/images/Showrooms.png'},
            {id:9, img: '/images/Showrooms.png'},
        ]
        this._second = [
            {id:1, img: '/images/Showrooms.png'},
            {id:2, img: '/images/Showrooms.png'},
            {id:3, img: '/images/Showrooms.png'},
            {id:4, img: '/images/Showrooms.png'},
            {id:5, img: '/images/Showrooms.png'},
            {id:6, img: '/images/Showrooms.png'},
            {id:7, img: '/images/Showrooms.png'},
            {id:8, img: '/images/Showrooms.png'},
            {id:9, img: '/images/Showrooms.png'},
        ]

        makeAutoObservable(this)
    }
    setFirst(first) {
        this._first = first
    }
    get first() {
        return this._first
    }
    setSecond(second) {
        this._second = second
    }
    get second() {
        return this._second
    }

}