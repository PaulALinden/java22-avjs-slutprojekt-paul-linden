
export default function CheckoutButtons({ handleCheckOut }) {

    const buttonsText = ['Remove', 'Continue', 'Checkout'];
    const buttonsId = ['removeFromCartButton', 'continueToHomePageButton', 'proceedToCheckoutButton'];
    return (
        <section>
            {
                buttonsText.map((text, index) => (
                    <button key={buttonsId[index]} id={buttonsId[index]} onClick={handleCheckOut}>{text}</button>
                ))
            }
        </section>
    )
}