import React, {useState, useEffect, useContext} from 'react';
import {getProducts} from "../http/productsAPI";
import ProductSliderItem from "./ProductSliderItem";
import {Context} from "../index";

const ProductList = ({type}) => {
    const [loading, setLoading] = useState(true);
    const {product} = useContext(Context)
    useEffect(() => {
        getProducts(type).then(data => product.setProduct(data)).finally(() => setLoading(false))
    }, [type])
    if (loading) {
        return <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center">Секундочку...</div>
    }
    return (
        <div className='product-list'>
            {product.product.map(element =>
                <ProductSliderItem key={element.uuid} product={element}/>)
            }
        </div>
    );
};

export default ProductList;