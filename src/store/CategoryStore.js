import {makeAutoObservable} from "mobx";

export  default class CategoryStore {
    constructor() {
        this._category = [
        ]
        makeAutoObservable(this)
    }
    setCategory(category) {
        this._category = category
    }
    get category() {
        return this._category
    }

}