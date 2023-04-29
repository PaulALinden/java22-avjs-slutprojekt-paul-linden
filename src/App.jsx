import './css/App.css'
import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';

import Header from './components/header/Header';
import Shop from './components/shop/Shop';
import CheckOut from './components/checkout/CheckOut';

function App() {

    const [isShopping, setIsShopping] = useState(true);
    const [checkOutArr, setCheckOutArr] = useState([]);

    return (
        <>
            <Header setIsShopping={setIsShopping} isShopping={isShopping} checkOutArr={checkOutArr} />
            <div>
                {isShopping ? <Shop setIsShopping={setIsShopping} setCheckOutArr={setCheckOutArr} /> : <CheckOut checkOutArr={checkOutArr} setIsShopping={setIsShopping} />}
            </div>
        </>
    );
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);

