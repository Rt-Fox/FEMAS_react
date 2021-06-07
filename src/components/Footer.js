import React from 'react';
import {ABOUT_ROUTE, CATALOG_ROUTE, CONTACTS_ROUTE, DELIVERY_ROUTE, PARTNERS_ROUTE, HOWPAY_ROUTE,GUARANTEE_ROUTE} from "../utils/consts";

const Footer = () => {
    return (
        <footer className="container">
            <div className="row">
                <div className="col-4">
                    <h1>Меню</h1>
                    <div className="row">
                        <ul className="list-unstyled col-3">
                            <li><a href={CATALOG_ROUTE}>Каталог</a></li>
                            <li><a href={ABOUT_ROUTE}>О нас</a></li>
                            <li><a href={DELIVERY_ROUTE}>Доставка</a></li>
                            <li><a href={CONTACTS_ROUTE}>Контакты</a></li>
                        </ul>
                        <ul className="list-unstyled offset-2">
                            <li><a href="#">Материалы обивки</a></li>
                            <li><a href={HOWPAY_ROUTE}>Способы оплаты</a></li>
                            <li><a href={GUARANTEE_ROUTE}>Гарантия и возврат</a></li>
                            <li><a href={PARTNERS_ROUTE}>Партнерам</a></li>
                        </ul>
                    </div>

                </div>
                <div className="col-3">
                    <h1>Контакты</h1>
                    <ul className="list-unstyled">
                        <li><a href="mailto:femas.online@gmail.com">femas.online@gmail.com</a></li>
                        <li><a href="tel:++791115615840">+7 (911) 561 58 40</a></li>
                        <li><a href="#">Ул. Потапова, 2М, Санкт-Петербург</a></li>
                        <li><a href="#">Ул. Тверская, 20</a></li>
                    </ul>
                </div>
                <div className="col-4 offset-1">
                    <h1>Будь с нами</h1>
                    <ul className="list-unstyled">
                        <li className="d-flex">
                            <a href="#" className="mr-4"><i className="fa fa-vk"></i></a>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                        </li>
                        <li><a href="#" className="btn disabled">Работаем без выходных</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;