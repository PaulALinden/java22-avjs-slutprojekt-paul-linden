import '../../css/checkout/CheckOut.css'
import React, { useState } from 'react';

import CartSummary from './CartSummary';
import CheckOutMessage from './OrderConfirmation';

export default function CheckoutPage(props) {

    const [isCheckedOut, setIsCheckedOut] = useState(false);

    return (
        <div id="checkout">
            {isCheckedOut ? <CheckOutMessage setIsCheckedOut={setIsCheckedOut} {...props}/> : <CartSummary {...props} setIsCheckedOut={setIsCheckedOut} />}
        </div>
    );
}
