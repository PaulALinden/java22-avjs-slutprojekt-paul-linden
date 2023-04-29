import '../../css/checkout/CheckOut.css'

import CheckOutList from './checkoutlist/CheckOutList';

export default function CheckOut(props) {

    return (
        <div id="checkout">
            <CheckOutList  checkOutArr={props.checkOutArr} setIsShopping={props.setIsShopping}/>
        </div>
    );
}
