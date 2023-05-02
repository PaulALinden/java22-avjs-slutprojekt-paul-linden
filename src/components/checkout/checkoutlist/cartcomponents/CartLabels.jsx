
export default function CartLabels() {

    const labels = ['Img', 'Product', 'Quantity', 'Price'];

    return (
        <li id='labelsCart'>
            {labels.map((item) => (
                <span>{item}</span>
            ))}
        </li>
    )
}