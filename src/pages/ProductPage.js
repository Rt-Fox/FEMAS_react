import React, {useState,useEffect,useContext} from 'react';
import ProductSlider from "../components/ProductSlider";
import Colors from "../components/Colors";
import Breadcrumbs from "../components/Breadcrumbs";
import {useLocation, useParams} from "react-router-dom";
import {getProductItem} from "../http/productsAPI";
import {DELIVERY_ROUTE, GUARANTEE_ROUTE, HOWPAY_ROUTE} from "../utils/consts";
import {Context} from "../index";

const ProductPage = () => {
    const [product, setProduct] = useState({info: []});
    const [loading, setLoading] = useState(true);
    const location = useLocation().pathname.replace('/product/','');
    const {id} = useParams();
    const type = location.replace('/'+ id,'')
    const {basket} = useContext(Context)

    function handleClick(e) {
        e.preventDefault();
        basket.setPushBasket(product, product.uuid)
    }
    useEffect(() => {
        getProductItem(location).then(data => setProduct(data)).finally(() => setLoading(false))
    }, [])
    if (loading) {
        return <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center">Секундочку...</div>
    }
    return (
        <div className="product">
            <div className="container mt-5 mb-5">
                <div className="row d-flex align-content-center justify-content-center">
                    <Breadcrumbs crumbs={['', type, product.name]}/>
                </div>
                <div className="row">
                    <div className="col-6 d-flex flex-column product-image">
                        <img className="main-image" src={product.main_photo} alt=""/>
                        <div className="d-flex flex-row flex-wrap justify-content-between">
                            {product.photos?.map((img, index) =>
                                <img key={index} className='mb-3' src={img} alt=""/>
                            )}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex">
                            <div className="d-flex flex-column ">
                                <h1 className='mb-4'>{product.name}</h1>
                                <p className='mb-4'>{product.description}</p>
                                {product.color?
                                <div className="color">
                                    <h3>Цвета</h3>
                                    <Colors />
                                </div> :
                                    null}
                                <div className="w-50">
                                    <button onClick={handleClick} className="btn w-100 btn-prim active">Добавить в корзину</button>
                                </div>
                                <div className="mt-5 mb-4">
                                    <h3>Характеритиски</h3>
                                    {product.options?.map((option, index) =>
                                        <p key={option.uuid}>{option.class_name}: {option.size} см</p>)
                                    }
                                </div>
                                <div className="w-50">
                                    <button className="btn w-100 btn-prim active">Купить в один клик</button>
                                </div>
                                <div className="btn-group justify-content-between flex-wrap">
                                    <a href="#" className="btn btn-prim col-6">Материалы обивки</a>
                                    <a href={GUARANTEE_ROUTE} className="btn btn-prim col-6">Гарантия и возврат</a>
                                    <a href={HOWPAY_ROUTE} className="btn btn-prim col-6">Способы оплаты</a>
                                    <a href={DELIVERY_ROUTE} className="btn btn-prim col-6">Условия доставки</a>
                                </div>
                            </div>
                            <div className="product-info d-flex flex-column align-content-end">
                                <h2>{product.price} ₽</h2>
                                <p>АРТИКУЛ</p>
                                <p className="articul">{product.product_code}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h1>Вам также может понравиться </h1>
                <ProductSlider filter={type}/>
            </div>
        </div>
    );
};

export default ProductPage;