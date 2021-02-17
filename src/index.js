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

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value = {{
        product: new ProductStore(),
        furnit: new FurnitStore(),
        ads: new AdsStore(),
        sltproduct: new SolutionProductStore(),
        solution: new SolutionBtnStore()}}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);
