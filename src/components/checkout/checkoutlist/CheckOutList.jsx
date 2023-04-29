
export default function CheckOutList(props) {
    const text = 'Shopping Cart';
    const newCheckOutArr = props.checkOutArr.map((obj) => ({ ...obj, quant: 1 }));
    const labels = ['Img', 'Product', 'Quantity', 'Price'];
    const itemQuantities = {};
    let totalSum = 0;
    
    for (const item of newCheckOutArr) {
        if (itemQuantities[item.id]) {
            itemQuantities[item.id].quant += 1;
            itemQuantities[item.id].price += itemQuantities[item.id].price;
        } else {
            itemQuantities[item.id] = item;
        }
    }

    const uniqueItems = Object.values(itemQuantities);

    uniqueItems.forEach(item => {
        totalSum += item.price;
    });

    console.log(totalSum);

    function checkOut(event) {
        const option = event.target.textContent;

        if (option === 'Checkout') {
            console.log('Shopping cart:', uniqueItems);
        }
        else {
            console.log('Continue Shopping');
            props.setIsShopping(true);
        }
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
                {uniqueItems.map((item) => (
                    <li key={item.id}>
                        <span><img id='productImg' src={item.img} alt="" />
                        </span><span id='product'>{item.product}</span>
                        <span id='quantity'>{item.quant}</span>
                        <span id='price'>{item.price}</span>
                    </li>
                ))}
                <li id='totalSum'><span>Total: {totalSum}</span></li>
            </ul>
            {/*Buttons for cheackout and Continue*/}
            <section>
                <button id="continueButton" onClick={checkOut}>Continue</button>
                <button id="checkoutButton" onClick={checkOut}>Checkout</button>
            </section>
        </div>
    );
}