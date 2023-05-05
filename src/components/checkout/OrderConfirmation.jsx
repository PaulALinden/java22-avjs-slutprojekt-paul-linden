
export default function OrderConfirmation(props) {
    
    const confirmationMessage = 'Thank you for your order';
    const buttonText = 'Back to homepage'

    function backToHomePage() {
        props.setIsCheckedOut(true);
        props.setIsShopping(true);
    }

    return (
        <div id="checkOutMessage">
            <h3>{confirmationMessage}</h3>
            <button onClick={backToHomePage}>{buttonText}</button>
        </div>
    )
}