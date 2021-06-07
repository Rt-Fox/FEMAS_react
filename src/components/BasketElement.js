import React, {useContext, useState} from 'react';
import {Context} from "../index";

const BasketElement = ({item}) => {
    const {basket} = useContext(Context);
    const [count, setCount] = useState(item.count);
    const [price, setPrice] = useState(count * item.price);
    function count_minus(uuid) {
        if (basket.basket.find((item) => item.uuid === uuid).count === 0) {
            basket.setBasketDelete(basket.basket.find((item) => item.uuid === uuid));
            setCount(-1);
        } else {
            basket.setBasketCountMinus(uuid);
            setCount(basket.basket.find((item) => item.uuid === uuid).count);
            setPrice(count * item.price)
        }
    }
    function count_plus(uuid) {
        basket.setBasketCountPlus(uuid);
        setCount(basket.basket.find((item) => item.uuid === uuid).count);
        setPrice(count * item.price)
    }
    function del_element(uuid) {
        basket.setBasketDelete(basket.basket.find((item) => item.uuid === uuid));
        setCount(-1);
    }

    return (
        count !== -1?
        <div className="row basket_item">
            <div className='d-flex col-5'>
                <img src={item.main_photo} alt=""/>
                <div className='d-flex flex-column'>
                    <span className='basket_item__name'>{item.name}</span>
                    <span className='basket_item__about'>{item.class_name}</span>
                    <span className='basket_item__about'>{item.name}</span>
                </div>
            </div>
            <div className="col-2 d-flex justify-content-center basket_item__price">{item.price} ₽</div>
            <div className="col-2 d-flex justify-content-center offset-1 basket_item__count">
                {count === 0?
                    null
                :
                    <div onClick={() => count_minus(item.uuid)} className="btn_count btn_count_minus">
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.6967C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.46967 5.46967ZM2 5.25L1 5.25L1 6.75L2 6.75L2 5.25Z" fill="#3A3A3A"/>
                        </svg>
                    </div>
                }
                <div className='basket_item__count__count'>{count}</div>
                <div onClick={()=> count_plus(item.uuid)} className='btn_count btn_count_plus'>
                    <svg  width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.53033 6.53033C6.82322 6.23744 6.82322 5.76256 6.53033 5.46967L1.75736 0.6967C1.46447 0.403806 0.989592 0.403806 0.696698 0.6967C0.403805 0.989593 0.403805 1.46447 0.696698 1.75736L4.93934 6L0.6967 10.2426C0.403807 10.5355 0.403807 11.0104 0.6967 11.3033C0.989594 11.5962 1.46447 11.5962 1.75736 11.3033L6.53033 6.53033ZM5 6.75L6 6.75L6 5.25L5 5.25L5 6.75Z" fill="#3A3A3A"/>
                    </svg>
                </div>
            </div>
            <div className="col-2 d-flex justify-content-end basket_item__total">
                <div className='basket_item__total__total mr-2'>
                    {price} ₽
                </div>
            </div>
            <div onClick={() => del_element(item.uuid)} className='basket_item__total__cross'>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.849609" y="3.05176e-05" width="13.8189" height="1.20164" rx="0.60082" transform="rotate(45 0.849609 3.05176e-05)" fill="#999999"/>
                    <rect x="10.6211" y="0.849701" width="13.8189" height="1.20164" rx="0.60082" transform="rotate(135 10.6211 0.849701)" fill="#999999"/>
                </svg>
            </div>
        </div>
            :
            null
    );
};

export default BasketElement;