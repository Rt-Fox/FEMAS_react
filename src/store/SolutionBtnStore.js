import {makeAutoObservable} from "mobx";

export  default class SolutionBtnStore {
    constructor() {
        this._types = [
            {id:1, name: 'Новые'},
            {id:2, name: 'Гостинная'},
            {id:3, name: 'Гостинная'},
            {id:4, name: 'Cпалья'},
            {id:5, name: 'Cтудия'}
        ]
        this._selectedType = {id:1, name: 'Новые'}

        makeAutoObservable(this)
    }
    setTypes(types) {
        this._types = types
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    get types() {
        return this._types
    }
    get selectedType() {
        return this._selectedType
    }
}