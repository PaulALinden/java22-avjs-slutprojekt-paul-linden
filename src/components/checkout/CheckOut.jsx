import '../../css/checkout/CheckOut.css'
import React, { useState } from 'react';

import CheckOutList from './checkoutlist/CheckOutList';
import CheckOutMessage from './checkoutlist/CheckOutMessage';

export default function CheckOut(props) {

    const [ischeckedOut, setIsCheckedOut] = useState(true);

    return (
        <div id="checkout">
            {ischeckedOut ? <CheckOutList checkOutArr={props.checkOutArr} setCheckOutArr={props.setCheckOutArr} setIsShopping={props.setIsShopping} setIsCheckedOut={setIsCheckedOut} /> : <CheckOutMessage setIsCheckedOut={setIsCheckedOut} setIsShopping={props.setIsShopping}/>}
        </div>
    );
}
