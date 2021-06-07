import React, {useEffect,useContext,useState} from 'react';
import Breadcrumbs from "../components/Breadcrumbs";
import {useHistory} from "react-router-dom";
import ProductList from "../components/ProductList";
import {getCategory} from "../http/productsAPI";
import {Context} from "../index";

const ProductsPage = () => {
    const history = useHistory();
    const {category} = useContext(Context);
    const [loading, setLoading] = useState(true);
    const [type, setType] = useState(false);
    const [crumbs, setCrumbs] = useState(history.location.pathname.split('/'));

    useEffect(() => {
        getCategory().then(data => category.setCategory(data))
            .finally(() => setLoading(false))
    }, [category.category])
    if (loading) {
        return <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center">Секундочку...</div>
    }
    if (type === false) {
        for (let i = 0; i < category.category.length; i++) {
            if (crumbs[2] === category.category[i].link) {
                setType(category.category[i].link)
                setCrumbs(['', category.category[i].name])
                break;
            }
        }
        if (type === false) {
            return  <div className="col-12 d-flex justify-content-center">
                <h2>Такой категории нет, наведите на котолог, и выберете существующую</h2>
            </div>
        }
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <h1>{crumbs[1]}</h1>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <Breadcrumbs crumbs={crumbs}/>
                </div>
                <div className="col-12 d-flex justify-content-start">
                    <ProductList type={type}/>
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;