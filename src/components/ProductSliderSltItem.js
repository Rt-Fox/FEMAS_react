import React from 'react';
import {useHistory} from 'react-router-dom';
import {PRODUCT_ROUTE} from "../utils/consts";

const ProductSliderSltItem = ({arr}) => {
    const history = useHistory()
    return (
            <div className="row w-100 d-flex">
                <div className="left col-6 d-flex flex-column">
                    {arr[0]&&<a className="link link-1" onClick={() => history.push(PRODUCT_ROUTE + '/' + arr[0].id)} href=""><img alt='' src={arr[0].image} /></a>}
                    {arr[1]?
                        <a className="link link-2" onClick={() => history.push(PRODUCT_ROUTE + '/' + arr[1].id)} href=""><img alt='' src={arr[1].image} /></a>:
                        <div className="link link-2 empty"></div>
                    }
                </div>
                {arr[2]&&
                <div className="right col-6 d-flex flex-column">
                    {arr[2]&&<a className="link link-3" onClick={() => history.push(PRODUCT_ROUTE + '/' + arr[2].id)} href=""><img alt='' src={arr[2].image} /></a>}
                    {arr[3]&&<a className="link link-4" onClick={() => history.push(PRODUCT_ROUTE + '/' + arr[3].id)} href=""><img alt='' src={arr[3].image} /></a>}
                </div>
                }
            </div>

    );
};

export default ProductSliderSltItem;