import React,{useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import ProductSliderSltItem from "./ProductSliderSltItem";
import Carousel from "react-elastic-carousel";
import AdsSliderItem from "./AdsSliderItem";

const ProductSliderSlt = observer(() => {
    const {sltproduct} = useContext(Context);
    const breakPoints = [
        {width: 0, itemsToShow: 1, className: "slider-1_block", showArrows: false, verticalMode: true, enableMouseSwipe: true},
    ];

    return (
        <div className="slider-3">
            <Carousel  breakPoints={breakPoints}
                      renderPagination={({ pages, activePage, onClick }) => {
                          return (
                              <div className="dots" id="dots-3">
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
                {sltproduct.product.map( (item, index) => index%4? null : sltproduct.product.slice(index, index+4)).filter((item) => item).map(arr =>
                    (arr.length)? <ProductSliderSltItem arr={arr} /> : null)}
            </Carousel>
        </div>
    );
});

export default ProductSliderSlt;