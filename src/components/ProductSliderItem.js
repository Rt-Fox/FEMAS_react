import React from 'react';
import {useHistory} from 'react-router-dom';
import {PRODUCT_ROUTE} from "../utils/consts";

const ProductSliderItem = ({product}) => {
    const history = useHistory()
    return (
        <div className="card-main" onClick={() => history.push(PRODUCT_ROUTE + '/' + product.id)}>
            <div className="card-carousel">
                <img className="card-img-top" src={product.img}/>
                <div className="card-body d-flex justify-content-between">
                    <div className="">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.price}</p>
                    </div>
                    <a href="#" className="">
                        <svg width="19" height="19" viewBox="0 0 19 22" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.47205 1C6.28005 1 3.71205 3.4824 3.71205 6.568V8.888H1.79205C1.00005 8.888 0.352051 9.5144 0.352051 10.28V20.024C0.352051 20.7896 1.00005 21.416 1.79205 21.416H17.1521C17.9441 21.416 18.5921 20.7896 18.5921 20.024V10.28C18.5921 9.5144 17.9441 8.888 17.1521 8.888H15.2321V6.568C15.2321 3.4824 12.6401 1 9.47205 1ZM9.47205 1.928C12.1361 1.928 14.2721 3.9928 14.2721 6.568V8.888H4.67205V6.568C4.67205 3.9696 6.78405 1.928 9.47205 1.928ZM1.79205 9.816H17.1521C17.4161 9.816 17.6321 10.0248 17.6321 10.28V20.024C17.6321 20.2792 17.4161 20.488 17.1521 20.488H1.79205C1.52805 20.488 1.31205 20.2792 1.31205 20.024V10.28C1.31205 10.0016 1.50405 9.816 1.79205 9.816Z"
                                fill="#fff" stroke="#fff" strokeWidth="0.5"
                                strokeMiterlimit="10"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductSliderItem;