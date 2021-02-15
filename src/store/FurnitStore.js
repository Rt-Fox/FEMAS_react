import {makeAutoObservable} from "mobx";

export  default class FurnitStore {
    constructor() {
        this._types = [
            {id:1, name: 'ВСЕ ТОВАРЫ'},
            {id:2, name: 'СТОЛЫ'},
            {id:3, name: 'СТУЛЬЯ'},
            {id:4, name: 'ДИВАНЫ'},
            {id:5, name: 'КРОВАТИ'}
        ]
        this._selectedType = {id:1, name: 'ВСЕ ТОВАРЫ'}

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