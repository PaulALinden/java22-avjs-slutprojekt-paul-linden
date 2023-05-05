
export default function OrderConfirmation({setIsCheckedOut, setIsShopping}) {
    
    // Handler for the button to go back to the homepage
    function backToHomePage() {
        setIsCheckedOut(true);
        setIsShopping(true);
    }

    return (
        <div id="checkOutMessage">
            <h3>Thank you for your order</h3>
            <button onClick={backToHomePage}>Back to homepage</button>
        </div>
    )
}