
export default function CheckOutList(props) {
    const text = 'Shopping Cart';
    const labels = ['Img', 'Product', 'Quantity', 'Price'];
    let totalSum = 0;

    const uniqueItems = Object.values(props.checkOutArr);
    
    uniqueItems.forEach(item => {totalSum = totalSum + item.price});

    function checkOut(event) {
    
        const option = event.target.textContent;

        if (option === 'Checkout') {
            uniqueItems.forEach(item => {
                patchToFirebase(item.id, item.quant)
            });
            props.setCheckOutArr([]);
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
    }

    return (
        <div>
            {/*Header for Shopping Cart*/}
            <h2>{text}</h2>
            <ul>
                <li id='labelsCart'>
                    {labels.map((item) => (
                        <span>{item}</span>
                    ))}
                </li>
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
            <section>
                <button id="removeButton" onClick={checkOut}>Remove</button>
                <button id="continueButton" onClick={checkOut}>Continue</button>
                <button id="checkoutButton" onClick={checkOut}>Checkout</button>
            </section>
        </div>
    );
}