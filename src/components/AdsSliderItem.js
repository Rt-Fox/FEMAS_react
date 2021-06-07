import React from 'react';
import {useHistory} from 'react-router-dom';
import {ABOUT_ROUTE, CATALOG_ROUTE} from "../utils/consts";

const AdsSliderItem = ({ads}) => {

    const history = useHistory()
    if(ads.main) {
        return (
            <div className="slider-1_img_block">
                <img src={ads.photo} alt=""/>
                <div className="slider-1_center_block">
                    <h1>{ads.title}</h1>
                    <div className="" onClick={() => history.push(CATALOG_ROUTE)} className="btn btn-prim active">Каталог</div>
                </div>
            </div>
        );
    }
    return (
        <div className="slider-1_img_block">
            <img src={ads.photo} alt=""/>
            <div className="slider-1_right_block">
                <h1>{ads.title}</h1>
                <a className="" onClick={() => history.push(CATALOG_ROUTE)}>Подробнее</a>
            </div>
        </div>
    );

};

export default AdsSliderItem;