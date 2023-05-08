import CartLabels from "./CartSummaryLabels";
import CheckoutButtons from "./CheckoutButtons";

import { updateStockBalance } from "../../modules/stockBalanceUpdater";

export default function CartSummary({ cartItems, setCartItems, setIsCheckedOut, setIsShopping, setStatus }) {

    // Calculate the total sum of all items in the cart
    const totalSum = cartItems.reduce((acc, cartItem) => acc + cartItem.total, 0);

    // Function to handle the checkout process
    function handleCheckOut(event) {
        const cartOption = event.target.textContent;

        const actions = {
            Checkout: () => {
                // Call the updateStockBalance function to update the stock balance
                if (cartItems.length !== 0) {
                    updateStockBalance(cartItems, setIsCheckedOut, setCartItems, setStatus);
                } else {
                    // If the cart is empty, set the status to 'empty'
                    setStatus('empty')
                }
            },
            Empty: () => {
                // Set the 'isShopping' flag to true and clear the cart
                setIsShopping(true);
                setCartItems([])
            },
            Continue: () => {
                // Set the 'isShopping' flag to true
                setIsShopping(true);
            }
        }
        // Execute the appropriate action based on the selected cart option
        actions[cartOption]();
    }

    // Function to add or remove an item from the cart
    function addAndRemoveCartItem(event) {
        const itemId = event.target.parentElement.parentElement.id;
        const buttonClick = event.target.dataset.action;
        const inCartItemIndex = cartItems.findIndex((cartItem) => cartItem.id === parseInt(itemId));

        let updatedCartList = [...cartItems];
        const existingCartItem = updatedCartList[inCartItemIndex];

        if (buttonClick === 'add') {
            // Increment the quantity and total price of the item
            updatedCartList[inCartItemIndex] = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + 1,
                total: existingCartItem.total + existingCartItem.price
            };
        } else if (buttonClick === 'remove') {
            if (existingCartItem.quantity > 1) {
                // Decrease the quantity and total price of the item
                updatedCartList[inCartItemIndex] = {
                    ...existingCartItem,
                    quantity: existingCartItem.quantity - 1,
                    total: existingCartItem.total - existingCartItem.price
                };
            }
            else {
                // Remove the item from the cart if the quantity is already 1
                updatedCartList.splice(inCartItemIndex, 1);
            }
        }
        // Update the cart items state with the modified cart list
        setCartItems(updatedCartList);
    }


    return (
        < div >
            <h2>Shopping Cart</h2>
            <ul>
                <CartLabels />

                {cartItems.map((item) => (

                    <li key={item.id} id={item.id}>

                        <span><img id='productImg' src={item.img} alt="" /></span>
                        <span id='product'>{item.product}</span>
                        <span id='quantity'>
                            <button onClick={addAndRemoveCartItem} data-action="add">+</button>
                            {item.quantity}
                            <button onClick={addAndRemoveCartItem} data-action="remove">-</button>
                        </span>
                        <span id='price'>{item.total}</span>

                    </li>

                ))}

                <li id='totalSum'>
                    <span>Total: {totalSum}</span>
                </li>
            </ul>

            <CheckoutButtons handleCheckOut={handleCheckOut} />
        </div >
    );
}