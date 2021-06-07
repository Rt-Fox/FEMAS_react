import React from 'react';
import {useHistory} from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

const Guarantee = () => {
    const history = useHistory();

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <h1>Гарантия и возрат</h1>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <Breadcrumbs crumbs={history.location.pathname.split('/')}/>
                </div>
            </div>
            <div className="row mb-100">
                <p className='text-grey mb-3'>Чтобы упростить покупку дизайнерской мебели в SK Design, мы предлагаем наиболее удобный для каждого клиента способ оплаты.</p>
                <p className='text-grey'>Например, Вы можете оплатить свой заказ следующими способами:</p>
                <p className='text-grey'>
                    <ul className='mb-1 pl-3'>
                        <li><b>Наличными</b> или оплатой <b>картой</b> в салоне официальных дилеров;</li>
                        <li>Через сервис Вашего <b>интернет-банкинга</b>, либо внесением денежных средств в кассу любого банка по выставленному счету;</li>
                    </ul>
                </p>
                <p className='text-grey mb-3'>Для <b>юридических</b> <b>лиц</b> предусмотрена возможность перечисления оплаты по предъявленному счету. После получения денежных средств клиенту обязательно предоставляются все необходимые для бухгалтерии документы. При получении, необходимо предоставить официальный разрешительный документ с печатью организации, например, доверенность на предъявителя.</p>
                <p className='text-grey mb-3'>В любом случае, мы обеспечим Вам возможность оплатить свой заказ таким способом, который Вам максимально удобен. Сотрудничая с SK Design, Вы получаете не только качественную дизайнерскую мебель, но и профессиональный сервис!</p>
            </div>
        </div>
    );
};

export default Guarantee;