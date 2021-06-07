import React from 'react';
import Breadcrumbs from "../components/Breadcrumbs";
import {useHistory} from "react-router-dom";
import DeliveryForm from "../components/DeliveryForm";

const Delivery = () => {
    const history = useHistory();

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
            <div className="row delivery-terms mb-4">
                <div className="col-12 d-flex">
                    <h1>Условия доставки</h1>
                </div>
                <div className="col-6">
                    <div className='d-flex'>
                        <img src="/images/delivery_1.svg" alt="1"/>
                        <p className='text-grey'>Время работы доставки: 07:00 — 23:00</p>
                    </div>
                    <div className='d-flex'>
                        <img src="/images/delivery_2.svg" alt="2"/>
                        <p className='text-grey'>Звоним за час до доставки</p>
                    </div>
                    <div className='d-flex'>
                        <img src="/images/delivery_3.svg" alt="3"/>
                        <p className='text-grey'>7 дней бесплатного хранения на складе</p>
                    </div>
                </div>
                <div className="col-6">
                    <div className='d-flex'>
                        <img src="/images/delivery_4.svg" alt="4"/>
                        <p className='text-grey'>Доставка и сборка в один день</p>
                    </div>
                    <div className='d-flex'>
                        <img src="/images/delivery_5.svg" alt="5"/>
                        <p className='text-grey'>Вывозим опаковку от мебели</p>
                    </div>
                    <div className='d-flex'>
                        <img src="/images/delivery_6.svg" alt="6"/>
                        <p className='text-grey'>7 Безопасная траспортировка</p>
                    </div>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-9">
                    <h1>Доставка по санкт-петербургу</h1>
                </div>
                <div className="col-9">
                    <p className='text-grey'>Доставка по всей России осуществляется транспортными компаниями. Наши логисты с радостью рассчитают для Вас стоимость и помогут выбрать оптимальную службу доставки. Отдел логистики работает по будням с 09:00 до 18:00 (по МСК).</p>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-9">
                    <h1>Доставка по Региону</h1>
                </div>
                <div className="col-9">
                    <p className='text-grey'>Доставка по всей России осуществляется транспортными компаниями. Наши логисты с радостью рассчитают для Вас стоимость и помогут выбрать оптимальную службу доставки. Отдел логистики работает по будням с 09:00 до 18:00 (по МСК).</p>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-12 d-flex">
                    <h1>Остались вопросы?</h1>
                </div>
                <DeliveryForm />
            </div>
        </div>
    );
};

export default Delivery;