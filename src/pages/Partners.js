import React from 'react';
import Breadcrumbs from "../components/Breadcrumbs";
import {useHistory} from "react-router-dom";
import PartnersForm from "../components/PartnersForm";

const Partners = () => {
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
            <div className="row">
                <div className="col-12 partners-img" style={{
                    backgroundImage: `url("/images/partners-img.png")`
                }}>
                    <div className="col-6 d-flex flex-column justify-content-center align-items-center partners-title">
                        <h1>Сотрудничество</h1>
                        <p className='text-grey'>С дизайнерами и архитекторами</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6 d-flex flex-column">
                    <h1>О нас</h1>
                    <p className='text-grey'>Компания SK Design приглашает к взаимовыгодному сотрудничеству креативных дизайнеров, архитекторов и декораторов, дизайн-бюро и интерьерные студии — все, кто дизайн интерьера сделали своим призванием.</p>
                    <p className='text-grey'>Партнерство мы видим как доверительные отношения, основанные на честности реализации бизнес идей в сфере создания и продаж современной, качественной, удобной, функциональной и эксклюзивной мебели. Ознакомиться с проектами можете в нашем портфолио. </p>
                </div>
                <PartnersForm />
            </div>
        </div>
    );
};

export default Partners;