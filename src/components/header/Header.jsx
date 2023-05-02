import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Header(props) {

    const isShopping = props.isShopping;
    let itemsInCart = 0;
    let cartDisplay;
    let amountDisplay;
    
    props.checkOutArr.forEach(element => {
        itemsInCart = itemsInCart + element.quant;
    });

    if (!isShopping) {
        cartDisplay = 'hidden';
    } else {
        cartDisplay = ''
    }

    if (itemsInCart === 0) {
        amountDisplay = 'hidden';
    } else {
        amountDisplay = ''
    }

    function handleCartButton() {
        props.setIsShopping(false)
    }

    function handleH1Click() {
        props.setIsShopping(true)
    }
    return (
        <header id="header">
            <h1 onClick={handleH1Click}>React Shop</h1>

            <button id="cartButton" className={cartDisplay} onClick={handleCartButton}>
                <p id='cartItemsAmount' className={amountDisplay}>{itemsInCart}</p>
                <FontAwesomeIcon id='cartIcon' icon={faShoppingCart} />
                <p id='cartText'>Cart</p>
            </button>
        </header>
    );
}