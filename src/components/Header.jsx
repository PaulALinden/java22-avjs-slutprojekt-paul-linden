import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Header({ isShopping, setIsShopping, cartList }) {

    let itemsInCart = 0;
    let cartButtonVisibility;
    let cartItemCountVisibility;

    // Calculate the total number of items in the cart
    cartList.forEach(item => {
        itemsInCart = itemsInCart + item.quant;
    });

    // Set the visibility of the cart button based on the shopping state
    if (!isShopping) {
        cartButtonVisibility = 'hidden';
    } else {
        cartButtonVisibility = ''
    }

    // Set the visibility of the cart item count based on whether the cart is empty or not
    if (itemsInCart === 0) {
        cartItemCountVisibility = 'hidden';
    } else {
        cartItemCountVisibility = ''
    }

    // Function to handle the click event on the cart button
    function handleCartButton() {
        setIsShopping(false)
    }

    // Function to handle the click event on the header to return to the homepage
    function handleHomePageClick() {
        setIsShopping(true)
    }
    return (
        <header id="header">
            <h1 onClick={handleHomePageClick}>React Shop</h1>

            <button id="cartButton" className={cartButtonVisibility} onClick={handleCartButton}>
                <p id='cartItemsAmount' className={cartItemCountVisibility}>{itemsInCart}</p>
                <FontAwesomeIcon id='cartIcon' icon={faShoppingCart} />
                <p id='cartText'>Cart</p>
            </button>
        </header>
    );
}