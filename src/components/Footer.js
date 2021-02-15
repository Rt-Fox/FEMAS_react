import React from 'react';

const Footer = () => {
    return (
        <footer className="container">
            <div className="row">
                <div className="col-3">
                    <h1>Меню</h1>
                    <ul className="list-unstyled">
                        <li><a href="#">Каталог</a></li>
                        <li><a href="#">О нас</a></li>
                        <li><a href="#">Доставка</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                </div>
                <div className="col-3">
                    <h1>Контакты</h1>
                    <ul className="list-unstyled">
                        <li><a href="mailto:femas.online@gmail.com">femas.online@gmail.com</a></li>
                        <li><a href="tel:++791115615840">+7 (911) 561 58 40</a></li>
                    </ul>
                </div>
                <div className="col-4 offset-2">
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