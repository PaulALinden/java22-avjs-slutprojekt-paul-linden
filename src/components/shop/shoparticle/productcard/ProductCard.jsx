
import { useEffect, useState } from 'react'

export default function ProductCard(props) {
    const [listData, setListData] = useState([]);

    console.log(props.category)

    function addToCart(event) {
        const id = event.target.parentElement.id;
        const item = listData.find((item) => item.id === parseInt(id));
        const existingItemIndex = props.checkOutArr.findIndex((cartItem) => cartItem.id === item.id);

        if (item.stockbalance === 0) {
            alert('Out of stock');
            return;
        }

        if (existingItemIndex === -1) {
            item.quant = 1;
            props.setCheckOutArr((checkOutArr) => [...checkOutArr, item]);
        }
        else {
            const updatedItem = {
                ...props.checkOutArr[existingItemIndex],
                quant: props.checkOutArr[existingItemIndex].quant + 1,
                price: props.checkOutArr[existingItemIndex].price + item.price
            };
            const updatedCheckOutArr = [...props.checkOutArr];
            updatedCheckOutArr[existingItemIndex] = updatedItem;
            props.setCheckOutArr(updatedCheckOutArr);
        }
    }

    useEffect(() => {
        async function getData() {
            const res = await fetch(`https://react-shop-45c8b-default-rtdb.europe-west1.firebasedatabase.app/products.json`);
            const data = await res.json();
        
            const dataValue = Object.values(data)
            
            if (props.category === 'all') {
                setListData(Object.values(data));
            } else {
                const filteredList = dataValue.filter(item => item.category === props.category);
                setListData(Object.values(filteredList));
            }
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
