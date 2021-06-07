import React,{useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import ProductSliderItem from "./ProductSliderItem";
import Carousel from "react-elastic-carousel";
import AdsSliderItem from "./AdsSliderItem";

const ProductSlider = observer(({type}) => {
    const {product} = useContext(Context);
    const breakPoints = [
        {width: 0, itemsToShow: 3, className: "slider-1_block", showArrows: false, enableMouseSwipe: true},
        {width: 1000, itemsToShow: 4, className: "slider-1_block", showArrows: false, enableMouseSwipe: true},
    ];

    return (
        <div className="slider-2">
            <Carousel breakPoints={breakPoints}
                      renderPagination={({ pages, activePage, onClick }) => {
                          return (
                              <div className="dots" id="dots-2">
                                  {pages.map(page => {
                                      const isActivePage = activePage === page
                                      return (
                                          <button key={page}
                                                  onClick={() => onClick(page)}
                                                  className={isActivePage?"active":""}>
                                              <div></div>
                                          </button>
                                      )
                                  })}
                              </div>
                          )
                      }}>
                {product.product.map(product =>
                    <ProductSliderItem key={product.uuid} product={product}/>
                )}
            </Carousel>
        </div>
    );
});

export default ProductSlider;