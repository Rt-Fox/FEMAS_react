import React,{useContext} from 'react';
import Carousel from 'react-elastic-carousel';
import AdsSliderItem from "./AdsSliderItem";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const AdsSlider = observer(() => {
    const {ads} = useContext(Context);
    const breakPoints = [
        {width: 0, itemsToShow: 1, className: "slider-1_block", showArrows: false, verticalMode: true, enableMouseSwipe: true},
    ];
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
                    {ads.ads.map(item =>
                        <AdsSliderItem key={item.id} ads={item} />)}
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