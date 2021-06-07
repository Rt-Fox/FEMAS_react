import {BASKET_ROUTE, PRODUCT_ROUTE, CATALOG_ROUTE,DELIVERY_ROUTE, ABOUT_ROUTE, SHOWROOMS_ROUTE, CONTACTS_ROUTE,PARTNERS_ROUTE,HOWPAY_ROUTE,GUARANTEE_ROUTE} from "./utils/consts";

import Catalog from "./pages/Catalog";
import Basket from "./pages/Basket";
import ProductPage from "./pages/ProductPage";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Showrooms from "./pages/Showrooms";
import Delivery from "./pages/Delivery";
import ProductsPage from "./pages/ProductsPage";
import Partners from "./pages/Partners";
import HowToPay from "./pages/HowToPay";
import Guarantee from "./pages/Guarantee";

export const publicRoutes = [
    {
        path: BASKET_ROUTE,
        name: 'Корзина',
        Component: Basket
    },
    {
        path: CATALOG_ROUTE,
        name: 'Главная',
        Component: Catalog
    },
    {
        path: DELIVERY_ROUTE,
        name: 'Доставка',
        Component: Delivery
    },
    {
        path: ABOUT_ROUTE,
        name: 'О нас',
        Component: About
    },
    {
        path: CONTACTS_ROUTE,
        name: 'Контакты',
        Component: Contacts
    },
    {
        path: SHOWROOMS_ROUTE,
        name: 'Шоурумы',
        Component: Showrooms
    },
    {
        path: PRODUCT_ROUTE + '/:category/:id',
        Component: ProductPage,
    },
    {
        path: PRODUCT_ROUTE + '/:category',
        Component: ProductsPage,
    },
    {
        path: PARTNERS_ROUTE,
        name: 'Партнерам',
        Component: Partners,
    },
    {
        path: HOWPAY_ROUTE,
        name: 'Способы оплаты',
        Component: HowToPay,
    },
    {
        path: GUARANTEE_ROUTE,
        name: 'Гарантия и возврат',
        Component: Guarantee,
    },
]


