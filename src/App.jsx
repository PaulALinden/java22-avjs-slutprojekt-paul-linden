import './css/App.css'
import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';

import Header from './components/Header';
import HomePageShop from './components/homepageshop/HomePageShop';
import CheckoutPage from './components/checkout/CheckoutPage';

function App() {

    const [isShopping, setIsShopping] = useState(true);
    const [cartList, setCartList] = useState([]);

    return (
        <>
            <Header setIsShopping={setIsShopping} isShopping={isShopping} cartList={cartList} />
            <div>
                {isShopping ? <HomePageShop cartList={cartList} setCartList={setCartList} setIsShopping={setIsShopping}/>
                    : <CheckoutPage cartList={cartList} setCartList={setCartList} setIsShopping={setIsShopping} />}
            </div>
        </>
    );
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);

