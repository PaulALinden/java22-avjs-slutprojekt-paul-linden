import './css/App.css'
import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';

import Header from './components/Header';
import HomePageShop from './components/homepageshop/HomePageShop';
import CheckoutPage from './components/checkout/CheckoutPage';
import Message from './components/Message';

function App() {

    const [status, setStatus] = useState('');
    const [isShopping, setIsShopping] = useState(true);
    const [cartItems, setCartItems] = useState([]);

    return (
        <>
            <Header setIsShopping={setIsShopping} isShopping={isShopping} cartItems={cartItems} status={status} setStatus={setStatus}/>
            {status === '' ? (  
                <div>
                    {isShopping ? <HomePageShop cartItems={cartItems} setCartItems={setCartItems} setIsShopping={setIsShopping} setStatus={setStatus} />
                        : <CheckoutPage cartItems={cartItems} setCartItems={setCartItems} setIsShopping={setIsShopping} setStatus={setStatus} />}
                </div>
            
            ) : (<Message status={status} setStatus={setStatus} />)}
        </>
    );
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);

