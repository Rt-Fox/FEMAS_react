import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const BasketFooter = observer( () => {
    const {basket} = useContext(Context);

    return (
        <div className='row mt-3 basket_total'>
            <div className="col-1 basket_total_text">Всего</div>
            <div className="col-3 basket_total_count">Количество:
                <span className='count_bold'>
                        {basket.totalCount}
                    </span>
            </div>
            <div className="col-4 basket_total_price">Итоговая цена:
                <span className='price_bold'>
                        {basket.totalPrice} ₽
                    </span>
            </div>
            <div className="col-4 d-flex align-content-end justify-content-end">
                <button className='btn btn-prim active'>Перейти к оформлению</button>
            </div>
        </div>
    );
});

export default BasketFooter;