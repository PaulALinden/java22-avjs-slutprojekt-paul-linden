import './css/App.css'
import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';

import Header from './components/Header';
import HomePageShop from './components/homepageshop/HomePageShop';
import CheckoutPage from './components/checkout/CheckoutPage';

function App() {

    const [isShopping, setIsShopping] = useState(true);
    const [cartItems, setCartItems] = useState([]);

    return (
        <>
            <Header setIsShopping={setIsShopping} isShopping={isShopping} cartItems={cartItems} />
            <div>
                {isShopping ? <HomePageShop cartItems={cartItems} setCartItems={setCartItems} setIsShopping={setIsShopping}/>
                    : <CheckoutPage cartItems={cartItems} setCartItems={setCartItems} setIsShopping={setIsShopping} />}
            </div>
        </>
    );
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);

