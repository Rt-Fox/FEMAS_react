import React from 'react';

const PartnersForm = () => {
    return (
        <div className="col-6 d-flex flex-column partners_form mb-100">
            <h1>О вас</h1>
            <div className='d-flex'>
                <input type="text" placeholder='ВАШЕ ИМЯ'/>
                <input type="text" placeholder='ВАША ФАМИЛИЯ'/>
            </div>
            <div className='d-flex'>
                <input type="tel" placeholder='Номер телефона'/>
                <input type="text" placeholder='Название организации/студии'/>
            </div>
            <div className='d-flex'>
                <input type="text" placeholder='сайт/соц.сеть'/>
                <input type="text" placeholder='E-mail'/>
            </div>
            <div className='d-flex'>
                <select name="cars" id="cars">
                    <option value="Санкт-Петербург">Санкт-Петербург</option>
                    <option value="Москва">Москва</option>
                </select>
            </div>
            <button type='submit' className='submit-btn'>Отправить</button>
        </div>
    );
};

export default PartnersForm;