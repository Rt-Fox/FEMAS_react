import React, {useEffect, useState,useContext} from 'react';
import {useHistory} from "react-router-dom";
import {
    ABOUT_ROUTE,
    CATALOG_ROUTE,
    DELIVERY_ROUTE,
    CONTACTS_ROUTE,
    SHOWROOMS_ROUTE, PRODUCT_ROUTE
} from "../utils/consts";
import {Context} from "../index";
import {getCategory} from "../http/productsAPI";
import BasketNavbar from "./BasketNavbar";

const NavBar = () => {
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    const {category} = useContext(Context);
    useEffect(() => {
        getCategory().then(data => category.setCategory(data))
            .finally(() => setLoading(false))
    }, [category.category])
    if (loading) {
        return <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center">Секундочку...</div>
    }
    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="collapse navbar-collapse d-flex justify-content-between">
                        <ul className="navbar-nav mt-2 mt-lg-0">
                            <li className="nav-item active dropdown">
                                <a onClick={() => history.push(CATALOG_ROUTE)} className="nav-link" href="">Каталог</a>
                                <div className="dropdown-content">
                                    {category.category.map(item => (
                                        <a key={item.link} href={PRODUCT_ROUTE+'/'+item.link}>{item.name}</a>
                                    ))}
                                </div>
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
                            <li className="nav-item">
                                <a onClick={() => history.push(SHOWROOMS_ROUTE)} className="nav-link" href="">Шоурумы</a>
                            </li>
                        </ul>
                        <div></div>
                        <a onClick={() => history.push(CATALOG_ROUTE)} className="navbar-brand" href="">FEMAS</a>
                        <div className='d-flex'>
                            <div className="nav-link d-flex flex-column mr-5">
                                <a className="active" href="tel:++791115615840">+7 (911) 561 58 40</a>
                                <span>Санкт-Петербург</span>
                            </div>
                            <form className="form-inline my-2 my-lg-0">
                                <button className="btn my-2 my-sm-0"><i className="fa"><img src="/images/search.svg" alt=""/></i>
                                </button>
                                <BasketNavbar />
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;