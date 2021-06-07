import React from 'react';

const DeliveryForm = () => {
    return (
        <form name='delivery-question' className="col-lg-5 d-flex flex-column delivery-question">
            <input type="text" placeholder='Ваше имя'/>
            <input type="text" placeholder='Номер телефона'/>
            <input type="text" placeholder='E-mail'/>
            <textarea placeholder='Комментарий'/>
            <button className='submit-btn' >отправить</button>
        </form>
    );
};

export default DeliveryForm;