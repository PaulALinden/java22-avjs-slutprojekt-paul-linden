import CartLabels from "./CartSummaryLabels";
import CheckoutButtons from "./CheckoutButtons";

export default function CartSummary(props) {
    const cartHeaderText = 'Shopping Cart';
    let totalSum = 0;

    const uniqueItemsInCart = Object.values(props.cartList);
    uniqueItemsInCart.forEach(item => { totalSum = totalSum + item.price });

    function checkOut(event) {

        const cartOption = event.target.textContent;

        if (cartOption === 'Checkout') {

            if (props.cartList.length !== 0) {
                uniqueItemsInCart.forEach(item => {
                    upDateStockBalance(item.id, item.quant)
                });

                props.setIsCheckedOut(true);
            }
            else {
                alert('Cart is empty')
            }
        }
        else if (cartOption === 'Remove') {
            props.setIsShopping(true);
            props.setCartList([])
        }
        else {
            props.setIsShopping(true);
        }
    }

    async function upDateStockBalance(id, quant) {
        const itemToUpdate = uniqueItemsInCart.find((item) => item.id === id);

        if (itemToUpdate.stockbalance === 0) {
            alert(`${itemToUpdate.product} is out of stock!!`);
            return;
        }
        else if (quant > itemToUpdate.stockbalance) {
            alert(`${itemToUpdate.product} doesnt have enough in stock`);
            return;
        }

        const updatedBalance = itemToUpdate.stockbalance - quant;
        const newStockBalance = {
            stockbalance: updatedBalance,
        };

        const patchUrl = `https://react-shop-45c8b-default-rtdb.europe-west1.firebasedatabase.app/products/item${id}.json`;
        const options = {
            method: "PATCH",
            body: JSON.stringify(newStockBalance),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        };

        const updateResponse = await fetch(patchUrl, options);
       
        props.setCartList([]);
    }

    return (
        <div>
            <h2>{cartHeaderText}</h2>
            <ul>
                <CartLabels />
                {props.cartList.map((item) => (
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
            <CheckoutButtons checkOut={checkOut} />
        </div>
    );
}