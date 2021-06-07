import React, {useState, useEffect, useContext} from 'react';
import {useHistory} from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import {Context} from "../index";
import BasketElement from "../components/BasketElement";
import BasketFooter from "../components/BasketFooter";


const Basket = () => {
    const history = useHistory();
    const {basket} = useContext(Context)
    basket.setBasket(JSON.parse(localStorage.basket))
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <h1>Корзина</h1>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <Breadcrumbs crumbs={history.location.pathname.split('/')}/>
                </div>
            </div>
            <div className="row basket_title">
                <p className='col-5'>Продукт</p>
                <p className='col-2 d-flex justify-content-center'>Цена</p>
                <p className='col-2 offset-1 d-flex justify-content-center'>Количество</p>
                <div className='col-2 d-flex justify-content-end'><p className='mr-2'>Всего</p></div>
            </div>
            {   basket.basket.length > 0 ?
                basket.basket.map( item =>
                    <BasketElement key={item.uuid} item={item} />)
                :
                <div>Ну а выбрать?!</div>
            }
            <BasketFooter />
        </div>
    );
};

export default Basket;