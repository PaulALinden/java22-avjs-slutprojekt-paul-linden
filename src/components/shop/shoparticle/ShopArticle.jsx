import ProductCard from "./productcard/ProductCard"

export default function ShopArticle(props) {


    return (
        
        <article id="shopArticle">

            <h3>Products</h3>

            <div id="productContainer">

                <ProductCard setCheckOutArr={props.setCheckOutArr} />
               
            </div>

        </article>
    );

}