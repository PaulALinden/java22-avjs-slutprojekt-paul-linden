
export default function OrderConfirmation({setIsCheckedOut, setIsShopping}) {
    
    function backToHomePage() {
        setIsCheckedOut(true);
        setIsShopping(true);
    }

    return (
        <div id="checkOutMessage">
            <h2>Thank you for your order</h2>
            <button id="backToHome" onClick={backToHomePage}>Back to homepage</button>
        </div>
    )
}