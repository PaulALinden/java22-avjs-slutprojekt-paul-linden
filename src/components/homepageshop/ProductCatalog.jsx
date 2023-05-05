import { useEffect, useState } from 'react'

export default function ProductCatalog({ cartList, setCartList, productCategory }) {
    const [productList, setProductList] = useState([]);

    function addToCart(event) {
        // Get the product object from the productList based on the id of the clicked button
        const product = productList[event.target.parentElement.id];
        // Check if the product is already in the cart
        const inCartItemIndex = cartList.findIndex((cartItem) => cartItem.id === product.id);

        // If the product is out of stock, show an alert and do not add it to the cart
        if (product.stockbalance === 0) {
            alert('Out of stock');
            return;
        }
        
        // If the product is not in the cart, add it with a quantity of 1
        if (inCartItemIndex === -1) {
            product.quant = 1;
            setCartList((cartList) => [...cartList, product]);
        }
        // If the product is already in the cart, update its quantity and price
        else {
            const updatedItem = {
                ...cartList[inCartItemIndex],
                quant: cartList[inCartItemIndex].quant + 1,
                price: cartList[inCartItemIndex].price + product.price
            };
            const updatedCartList = [...cartList];
            updatedCartList[inCartItemIndex] = updatedItem;
            setCartList(updatedCartList);
        }
    }

     // useEffect hook to fetch product data and update the productList state based on the selected category
    useEffect(() => {

        // Async function to fetch product data from Firebase
        async function getProductData() {
            const response = await fetch(`https://react-shop-45c8b-default-rtdb.europe-west1.firebasedatabase.app/products.json`);
            const productData = await response.json();

             // Convert the product data object to an array of values
            const productDataValue = Object.values(productData)

            // If the selected category is 'all', set the productList state
            if (productCategory === 'all') {
                setProductList(productDataValue)
            }
            /* If the selected category is a specific category, filter the products by category- 
            and set the productList state to the filtered products*/
            else {
                const filteredProductList = productDataValue.filter(productList => productList.category === productCategory);
                setProductList(filteredProductList)
            }
        }
        // Call the getProductData function to fetch and update the product data
        getProductData();
    }, [productCategory]);

    // Render the product catalog section
    return (
        <article id="shopArticle">
            <h3>Products</h3>

            <section id="productContainer">
                {/* Map over the productList to render each product */}
                {productList.map((product) => (
                    <section id={product.id} key={product.id} className="productCard">
                        {/* Display the product name, image, price, stock balance, and 'Add' button */}
                        <p id='productName'>{product.product}</p>
                        <img src={product.img} alt="" />
                        <p id='price'>Price: {product.price}</p>
                        <p>Stock: {product.stockbalance} </p>
                        <button onClick={addToCart}>Add</button>
                    </section>
                ))}
            </section>
        </article>
    );
}
