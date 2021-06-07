import React,{useContext,useEffect} from 'react';
import BtnFiltr from "../components/BtnFiltr";
import BtnFiltrSlt from "../components/BtnFiltrSlt";
import ProductSlider from "../components/ProductSlider";
import ProductSliderSlt from "../components/ProductSliderSlt";
import AdsSlider from "../components/AdsSlider";
import {observer} from "mobx-react-lite";


const Catalog = observer(() => {
    return (
        <div>
            <AdsSlider />
            <div className="container">
                <BtnFiltr/>
                <ProductSlider />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <h1>Готовые решения</h1>
                    </div>
                </div>
                <BtnFiltrSlt/>
                <ProductSliderSlt />
            </div>
            <div className="container slider-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h1>#FEMAS</h1>
                        <p>Наша мебель в ваших постах</p>
                    </div>
                    <div className="btn btn-subscribe">Подписаться</div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex">
                        <div className="image-block">
                            <a href="#" className="image-block-small">
                                <img src="/images/rectangle32.png" alt=""/>
                            </a>
                            <a href="#" className="image-block-small">
                                <img src="/images/rectangle33.png" alt=""/>
                            </a>
                            <a href="#" className="image-block-small">
                                <img src="/images/rectangle34.png" alt=""/>
                            </a>
                            <a href="#" className="image-block-small">
                                <img src="/images/rectangle31.png" alt=""/>
                            </a>
                        </div>
                        <div className="image-block">
                            <a href="#" className="image-block-big">
                                <img src="/images/rectangle36.png" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Catalog;