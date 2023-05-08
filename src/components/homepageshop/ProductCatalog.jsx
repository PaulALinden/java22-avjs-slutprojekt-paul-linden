import { useEffect, useState } from 'react'
import getProductData from '../../modules/fetchProductData';

export default function ProductCatalog({ cartItems, setCartItems, productCategory, setStatus}) {

    const [productList, setProductList] = useState([]);

    function addItemToCart(event) {

        // Get the product object from the productList based on the id of the clicked button
        const productId = productList[event.target.parentElement.id];

        // Find index of item in array
        const inCartItemIndex = cartItems.findIndex((cartItem) => cartItem.id === productId.id);

        // If the product is not in the cart, add it with a quantity of 1
        if (inCartItemIndex === -1) {
            productId.quantity = 1;
            productId.total = productId.price;
            setCartItems((cartItems) => [...cartItems, productId]);
        }
        // If the product is already in the cart, update its quantity and price
        else {
            const updatedItem = {
                ...cartItems[inCartItemIndex],
                quantity: cartItems[inCartItemIndex].quantity + 1,
                total: cartItems[inCartItemIndex].total + productId.price
            };
            const updatedCartList = [...cartItems];
            updatedCartList[inCartItemIndex] = updatedItem;
            setCartItems(updatedCartList);
        }
    }

    function setStockInfo(stockBalance) {

        if (stockBalance === 0) {
            return { className: 'outOfStock', text: `Out of stock`, buttonClassName: 'hidden'};
        }
        else if (stockBalance <= 5) {
            return { className: 'lowStock', text: `Running low (${stockBalance})`,buttonClassName: 'show' };
        }
        else {
            return { className: 'inStock', text: `In stock (${stockBalance})` ,buttonClassName: 'show'};
        }
    }

    // fetch product data and update the productList state based on the selected category
    useEffect(() => {
        const unsubscribe = getProductData(productCategory, setProductList, setStatus);
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
                        <p id='price'>{product.price} {product.currency}</p>
                        <p className={setStockInfo(product.stockbalance).className}>{setStockInfo(product.stockbalance).text}</p>
                        <button className={setStockInfo(product.stockbalance).buttonClassName} onClick={addItemToCart}>Add to cart</button>
                    </section>
                ))}

            </section>
        </article>
    );
}
