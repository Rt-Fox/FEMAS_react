import React, {useContext, useEffect, useState} from 'react';
import Carousel from 'react-elastic-carousel';
import AdsSliderItem from "./AdsSliderItem";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {getPromo} from "../http/productsAPI";

const AdsSlider = observer(() => {
    const {ads} = useContext(Context);
    const [loading, setLoading] = useState(true);
    const breakPoints = [
        {width: 0, itemsToShow: 1, className: "slider-1_block", showArrows: false, verticalMode: true, enableMouseSwipe: true},
    ];
    useEffect(() => {
        getPromo().then(data => ads.setAds(data)).finally(() => setLoading(false))
    }, [])
    if (loading) {
        return <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center">Секундочку...</div>
    }
    return (
        <div className="container slider-1">
            <Carousel verticalMode  breakPoints={breakPoints}
                      renderPagination={({ pages, activePage, onClick }) => {
                          return (
                              <div className="dots" id="dots">
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
                    {ads.ads.map((item,index) =>
                        <AdsSliderItem key={index} ads={item} />)}
            </Carousel>
            <ul className="list-unstyled">
                <li className="d-flex flex-column">
                    <a href="#"><i className="fa fa-vk"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                </li>
            </ul>
        </div>

    );
});

export default AdsSlider;