
export default function CartButtons(props) {

    return (
        <section>
            <button id="removeButton" onClick={props.checkOut}>Remove</button>
            <button id="continueButton" onClick={props.checkOut}>Continue</button>
            <button id="checkoutButton" onClick={props.checkOut}>Checkout</button>
        </section>
    )
}