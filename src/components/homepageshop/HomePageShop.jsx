import { useState } from 'react';
import '../../css/shop/Shop.css';

import ProductCategoryFilter from './ProductCategoryFilter';
import ProductCatalog from './ProductCatalog';


export default function HomePageShop({cartItems, setCartItems}) {

    // State variable to store the current category selected by the user.
    const [productCategory, setProductCategory] = useState('all');

    // Renders the main content of the shop page, including the product categories and catalog.
    return (
        <div id="shop">
            <main id='shopMain'>
                {/* Displays the list of categories for the user to choose from */}
                <ProductCategoryFilter setProductCategory={setProductCategory} />
                
                {/* Displays the products in the selected category */}
                <ProductCatalog cartItems={cartItems} setCartItems={setCartItems} productCategory={productCategory} />
            </main>
        </div>
    );
}