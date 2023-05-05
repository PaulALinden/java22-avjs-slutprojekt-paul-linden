import getFirebaseApp from '../modules/firebaseApp';
import { getDatabase, ref, onValue } from "firebase/database";

function getProductData(productCategory, setProductList) {

    // Get the Firebase database reference and products reference
    const database = getDatabase(getFirebaseApp());
    const productsRef = ref(database, "products");

    // Listen for changes to the products node
    const unsubscribe = onValue(productsRef, (snapshot) => {
        if (!snapshot.exists()) {
            throw new Error("Unable to fetch product data.");
        }

        const productData = snapshot.val();
        const productDataValue = Object.values(productData);

        // If the selected category is 'all', set the productList state
        if (productCategory === "all") {
            setProductList(productDataValue);
        }
        /* If the selected category is a specific category, filter the products by category
        and set the productList state to the filtered products*/
        else {
            const filteredProductList = productDataValue.filter(
                (productList) => productList.category === productCategory
            );
            setProductList(filteredProductList);
        }
    });

    return unsubscribe;
}

export default getProductData;


