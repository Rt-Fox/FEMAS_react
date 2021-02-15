import React from 'react';
import NavBar from "../components/NavBar";
import ProductSlider from "../components/ProductSlider";
import Footer from "../components/Footer";

const ProductPage = () => {

    return (
        <div>
            <div className="container">
                <ProductSlider />
            </div>
        </div>
    );
};

export default ProductPage;