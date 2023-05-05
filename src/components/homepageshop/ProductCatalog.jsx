import { useEffect, useState } from 'react'
import getProductData from '../../modules/fetchProductData';

export default function ProductCatalog({ cartItems, setCartItems, productCategory }) {

    const [productList, setProductList] = useState([]);

    function addItemToCart(event) {
        
        // Get the product object from the productList based on the id of the clicked button
        const product = productList[event.target.parentElement.id];

        // Check if the product is already in the cart
        const inCartItemIndex = cartItems.findIndex((cartItem) => cartItem.id === product.id);

        // If the product is out of stock, show an alert and do not add it to the cart
        if (product.stockbalance === 0  || product.stockbalance === undefined) {
            alert('Out of stock');
            return;
        }

        // If the product is not in the cart, add it with a quantity of 1
        if (inCartItemIndex === -1) {
            product.quantity = 1;
            setCartItems((cartItems) => [...cartItems, product]);
        }
        // If the product is already in the cart, update its quantity and price
        else {
            const updatedItem = {
                ...cartItems[inCartItemIndex],
                quantity: cartItems[inCartItemIndex].quantity + 1,
                price: cartItems[inCartItemIndex].price + product.price
            };
            const updatedCartList = [...cartItems];
            updatedCartList[inCartItemIndex] = updatedItem;
            setCartItems(updatedCartList);
        }
    }

    // fetch product data and update the productList state based on the selected category
    useEffect(() => {
        const unsubscribe = getProductData(productCategory, setProductList);
        return () => {
            unsubscribe();
        };
    }, [productCategory]);

    // Render the product catalog section
    return (
        <article id="shopArticle">
            <h3>Products</h3>

            <section id="productContainer" key='productContainer'>
                {/* Map over the productList to render each product */}
                {productList.map((product) => (
                    <section id={product.id} key={product.id} className="productCard">
                        {/* Display the product name, image, price, stock balance, and 'Add' button */}
                        <p id='productName'>{product.product}</p>
                        <img src={product.img} alt="" />
                        <p id='price'>Price: {product.price}</p>
                        <p>Stock: {product.stockbalance} </p>
                        <button onClick={addItemToCart}>Add</button>
                    </section>
                ))}
            </section>
        </article>
    );
}
