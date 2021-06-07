import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.scss'
import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ProductStore from "./store/ProductStore";
import FurnitStore from "./store/FurnitStore";
import SolutionBtnStore from "./store/SolutionBtnStore";
import AdsStore from "./store/AdsStore";
import SolutionProductStore from "./store/SolutionProductStore";
import ShowroomsStore from "./store/ShowroomsStore";
import BasketStore from "./store/BasketStore";
import CategoryStore from "./store/CategoryStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
            product: new ProductStore(),
            basket: new BasketStore(),
            category: new CategoryStore(),
            furnit: new FurnitStore(),
            ads: new AdsStore(),
            showrooms: new ShowroomsStore(),
            sltproduct: new SolutionProductStore(),
            productsPage: new BasketStore(),
            solution: new SolutionBtnStore()
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);
