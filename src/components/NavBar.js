import React from 'react';
import {useHistory} from "react-router-dom";
import {ABOUT_ROUTE, CATALOG_ROUTE, DELIVERY_ROUTE, CONTACTS_ROUTE, BASKET_ROUTE} from "../utils/consts";

const NavBar = () => {
    const history = useHistory();
    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="collapse navbar-collapse d-flex justify-content-between">
                        <ul className="navbar-nav mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a onClick={() => history.push(CATALOG_ROUTE)} className="nav-link" href="">Каталог</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={() => history.push(ABOUT_ROUTE)} className="nav-link" href="">О нас</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={() => history.push(DELIVERY_ROUTE)} className="nav-link" href="">Доставка</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={() => history.push(CONTACTS_ROUTE)} className="nav-link" href="">Контакты</a>
                            </li>
                        </ul>

                        <a onClick={() => history.push(CATALOG_ROUTE)} className="navbar-brand" href="">FEMAS</a>
                        <div className="nav-link d-flex flex-column">
                            <a className="active" href="tel:++791115615840">+7 (911) 561 58 40</a>
                            <span>Санкт-Петербург</span>
                        </div>

                        <form className="form-inline my-2 my-lg-0">
                            <button className="btn my-2 my-sm-0"><i className="fa"><img src="/images/search.svg" alt=""/></i>
                            </button>
                            <button onClick={() => history.push(BASKET_ROUTE)} className="btn my-2 my-sm-0"><i className="fa"><img src="/images/look.svg"
                                                                                        alt=""/></i></button>
                        </form>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;