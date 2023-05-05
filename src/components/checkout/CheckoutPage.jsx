import '../../css/checkout/CheckOut.css'
import React, { useState } from 'react';

import CartSummary from './CartSummary';
import OrderConfirmation from './OrderConfirmation';

export default function CheckoutPage({cartItems, setCartItems, setIsShopping}) {

    // state to determine if checkout is completed
    const [isCheckedOut, setIsCheckedOut] = useState(false);

    return (
        <div id="checkout">
            {/* conditionally render checkout confirmation message or cart summary */}
            {isCheckedOut ? <OrderConfirmation setIsCheckedOut={setIsCheckedOut} setIsShopping={setIsShopping}/>
                : <CartSummary cartItems={cartItems} setCartItems={setCartItems} setIsCheckedOut={setIsCheckedOut} setIsShopping={setIsShopping}/>}
        </div>
    );
}
