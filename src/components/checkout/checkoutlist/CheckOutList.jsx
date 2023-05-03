
import CartLabels from "./cartcomponents/CartLabels";
import CartButtons from "./cartcomponents/CartButtons";

export default function CheckOutList(props) {
    const text = 'Shopping Cart';
    let totalSum = 0;

    const uniqueItems = Object.values(props.checkOutArr);

    function checkOut(event) {
        uniqueItems.forEach(item => { totalSum = totalSum + item.price });

        const option = event.target.textContent;

        if (option === 'Checkout') {

            if (props.checkOutArr.length !== 0) {
                uniqueItems.forEach(item => {
                    patchToFirebase(item.id, item.quant)
                });

                props.setIsCheckedOut(false);
            }
            else {
                alert('Cart is empty')
            }
        }
        else if (option === 'Remove') {
            props.setIsShopping(true);
            props.setCheckOutArr([])
        }
        else {
            props.setIsShopping(true);
        }
    }

    async function patchToFirebase(id, quant) {
        const itemToUpdate = uniqueItems.find((item) => item.id === id);

        if (itemToUpdate.stockbalance === 0) {
            alert(`${itemToUpdate.product} is out of stock!!`);
            return;
        }
        else if (quant > itemToUpdate.stockbalance) {
            alert(`${itemToUpdate.product} doesnt have enough in stock`);
            return;
        }

        const updateStockbalance = itemToUpdate.stockbalance - quant;
        const newStockBalance = {
            stockbalance: updateStockbalance,
        };

        const patchUrl = `https://react-shop-45c8b-default-rtdb.europe-west1.firebasedatabase.app/products/item${id}.json`;
        const options = {
            method: "PATCH",
            body: JSON.stringify(newStockBalance),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        };

        const patchResponse = await fetch(patchUrl, options);
        props.setCheckOutArr([]);
    }

    return (
        <div>
            {/*Header for Shopping Cart*/}
            <h2>{text}</h2>
            <ul>
                <CartLabels />
                {/*Create list for every item added*/}
                {props.checkOutArr.map((item) => (
                    <li key={item.id}>
                        <span><img id='productImg' src={item.img} alt="" />
                        </span><span id='product'>{item.product}</span>
                        <span id='quantity'>{item.quant}</span>
                        <span id='price'>{item.price}</span>
                    </li>
                ))}
                <li id='totalSum'><span>Total: {totalSum}</span></li>
            </ul>
            {/*Buttons for checkout and Continue*/}
            <CartButtons checkOut={checkOut} />
        </div>
    );
}