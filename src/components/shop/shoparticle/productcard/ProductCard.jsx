
import { useEffect, useState } from 'react'

export default function ProductCard(props) {
    const [listData, setListData] = useState([]);

    function addToCart(event) {
        const id = event.target.parentElement.id;
        const item = listData.find((item) => item.id === parseInt(id));

        if (item.stockbalance === 0) {
            alert('Out of stock');
            return;
        }

        if (item) {
            props.setCheckOutArr((checkOutArr) => [...checkOutArr, item]);
        }

    }

    useEffect(() => {
        async function getData() {
            const res = await fetch(`https://react-shop-45c8b-default-rtdb.europe-west1.firebasedatabase.app/products.json`);
            const data = await res.json();
            setListData(Object.values(data));
        }

        getData();
    }, []);

    return (

        listData.map((item) => (
            <div id={item.id} key={item.id} className="productCard">
                <p id='productName'>{item.product}</p>
                <img src={item.img} alt="" />
                <p id='productName'>Price: {item.price}</p>
                <p>Stock: {item.stockbalance} </p>
                <button onClick={addToCart}>Add</button>
            </div>
        ))
    );

}
