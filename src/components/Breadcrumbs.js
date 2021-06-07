import React, {useContext, useState} from "react";
import { useHistory} from "react-router-dom";
import {CATALOG_ROUTE, PRODUCT_ROUTE} from "../utils/consts";
import {Context} from "../index";


const Breadcrumbs = ({crumbs}) => {
    const history = useHistory();
    const {category} = useContext(Context);
    const [type, setType] = useState(category[1]);
    crumbs.forEach(function(item, i, crumbs) {
        switch(item) {
            case 'basket':
                crumbs[i]='Корзина'
                break;
            case 'about':
                crumbs[i]='О нас'
                break;
            case 'contacts':
                crumbs[i]='Контакты'
                break;
            case 'delivery':
                crumbs[i]='Доставка'
                break;
            case 'showrooms':
                crumbs[i]='Шоурумы'
                break;
            case 'partners':
                crumbs[i]='Партнерам'
                break;
            case 'howtopay':
                crumbs[i]='Способы оплаты'
                break;
            case 'guarantee':
                crumbs[i]='Гарантия и возврат'
                break;
            default:
                for (let i = 0; i < category.category.length; i++) {
                    if (crumbs[1] === category.category[i].link) {
                        setType(category.category[i].link)
                        crumbs[1] = category.category[i].name
                        break;
                    }
                }
                break;
        }
    });
    return (
        <div className="crumb">
            {crumbs.map((link, index) => {
                    if (index === 0) {
                        return  <a key={index} onClick={() => history.push(CATALOG_ROUTE)} href=''>
                                    <span>Главная</span>
                                    <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="1.5" cy="1.5" r="1.5" fill="#999999"/>
                                    </svg>
                                </a>
                    } else if (index === crumbs.length-1) {
                        return <span key={index}>{link}</span>
                    } else {
                        return  <a key={index} href={PRODUCT_ROUTE + '/'+ type}>
                                    <span className=''>{link}</span>
                                    <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="1.5" cy="1.5" r="1.5" fill="#999999"/>
                                    </svg>
                                </a>
                    }
                }
            )}
        </div>
    );
};

export default Breadcrumbs;