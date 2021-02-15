import {BASKET_ROUTE, PRODUCT_ROUTE, CATALOG_ROUTE,DELIVERY_ROUTE, ABOUT_ROUTE, SHOWROOMS_ROUTE, CONTACTS_ROUTE} from "./utils/consts";

import Catalog from "./pages/Catalog";
import Basket from "./pages/Basket";
import ProductPage from "./pages/ProductPage";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Showrooms from "./pages/Showrooms";
import Delivery from "./pages/Delivery";

export const publicRoutes = [
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: CATALOG_ROUTE,
        Component: Catalog
    },
    {
        path: DELIVERY_ROUTE,
        Component: Delivery
    },
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },
    {
        path: SHOWROOMS_ROUTE,
        Component: Showrooms
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ProductPage,
    },
]


