import React, {useEffect, useContext,useState} from 'react';
import {BASKET_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const BasketNavbar = observer(() => {
    const history = useHistory();
    const {basket} = useContext(Context);
    return (
        <button onClick={() => history.push(BASKET_ROUTE)} className="btn my-2 my-sm-0 basket_btn">
            <i className="fa"><img src="/images/look.svg" alt=""/></i>
            {basket.totalCount > 0? <div className='basket_count'>{basket.totalCount}</div> :''}
        </button>
    );
});

export default BasketNavbar;