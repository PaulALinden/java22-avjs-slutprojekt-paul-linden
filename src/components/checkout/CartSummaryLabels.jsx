
export default function CartLabels() {

    const cartLabels = ['Img', 'Product', 'Quantity', 'Price'];

    return (
        <li id='cartLabels'>
            {cartLabels.map((labels) => (
                <span key={labels}>{labels}</span>
            ))}
        </li>
    )
}