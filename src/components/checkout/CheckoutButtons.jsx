
export default function CheckoutButtons(props) {

    const buttonsText = ['Remove','Continue','Checkout'];
    const buttonsId = ['removeButton','continueButton','checkoutButton'];
    return (
        <section>
            {
                buttonsText.map((text ,index) => (
                    <button key={buttonsId[index]} id={buttonsId[index]} onClick={props.checkOut}>{text}</button>
                ))
            }
        </section>
    )
}