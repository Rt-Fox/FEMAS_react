import React, {useContext} from 'react';
import {Context} from "../index";
import Carousel from "react-elastic-carousel";
import Breadcrumbs from "../components/Breadcrumbs";
import {useHistory} from "react-router-dom";


const Showrooms = () => {
    const {showrooms} = useContext(Context);
    const history = useHistory();
    const breakPoints = [
        {width: 0, itemsToShow: 1, className: "slider-1_block", showArrows: false, enableMouseSwipe: true},
        {width: 700, itemsToShow: 1, className: "slider-1_block", showArrows: false, enableMouseSwipe: false}
    ];

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <h1>Шоурумы</h1>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <Breadcrumbs crumbs={history.location.pathname.split('/')}/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <h1>ул. Потапова, 2М</h1>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <p className='text-grey'>Санкт-Петербург</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <div className="container slider-1">
                        <Carousel breakPoints={breakPoints}
                                  renderPagination={({ pages, activePage, onClick }) => {
                                      return (
                                          <div className="dots" style={{marginTop: '20px'}} id="dots-2">
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
                            {showrooms.first.map((showroom, index) =>
                                <div key={index} className='col-12'>
                                    <img key={showroom.id} src={showroom.img}/>
                                </div>
                            )}
                        </Carousel>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12 d-flex justify-content-center">
                    <h1>ул. Тверская, 20</h1>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <p className='text-grey'>Санкт-Петербург</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <div className="container slider-1">
                        <Carousel breakPoints={breakPoints}
                                  renderPagination={({ pages, activePage, onClick }) => {
                                      return (
                                          <div className="dots" style={{marginTop: '20px'}} id="dots-2">
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
                            {showrooms.second.map((showroom, index) =>
                                <div key={index} className='col-12'>
                                    <img key={showroom.id} src={showroom.img}/>
                                </div>
                            )}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Showrooms;