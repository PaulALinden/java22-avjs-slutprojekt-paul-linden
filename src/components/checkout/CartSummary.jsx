import CartLabels from "./CartSummaryLabels";
import CheckoutButtons from "./CheckoutButtons";
import { updateStockBalance } from "../../modules/stockBalanceUpdater";

export default function CartSummary({ cartItems, setCartItems, setIsCheckedOut, setIsShopping }) {
    const cartHeaderText = 'Shopping Cart';
    const totalSum = cartItems.reduce((acc, cartItem) => acc + cartItem.price, 0);

    function handleCheckOut(event) {
        const cartOption = event.target.textContent;

        const actions = {
            Checkout: () => {
                if (cartItems.length !== 0) {
                   
                    updateStockBalance(cartItems, setIsCheckedOut, setCartItems)
                   
                } else {
                    alert('Cart is empty')
                }
            },
            Remove: () => {
                setIsShopping(true);
                setCartItems([])
            },
            Continue: () => {
                setIsShopping(true);
            }
        }
        actions[cartOption]();
    }
   
    return (
        <div>
            <h2>{cartHeaderText}</h2>
            <ul>
                <CartLabels />
                {cartItems.map((item) => (
                    <li key={item.id}>
                        <span><img id='productImg' src={item.img} alt="" /></span>
                        <span id='product'>{item.product}</span>
                        <span id='quantity'>{item.quant}</span>
                        <span id='price'>{item.price}</span>
                    </li>
                ))}
                <li id='totalSum'>
                    <span>Total: {totalSum}</span>
                </li>
            </ul>
            <CheckoutButtons handleCheckOut={handleCheckOut} />
        </div>
    );
}