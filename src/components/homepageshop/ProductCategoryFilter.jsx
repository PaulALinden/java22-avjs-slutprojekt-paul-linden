
export default function ProductCategoryFilter({setProductCategory}) {

    // Array of category names to be displayed.
    const categories = ['All','Desktop', 'Laptop', 'Game'];

    // Updates the `productCategory` state based on the category selected.
    function chooseCategory(event) {
        const choosenCategory = event.target.textContent.toLowerCase();
        setProductCategory(choosenCategory);
    }

    // Renders a list of categories as a sidebar.
    return (
        <aside id="shopAside">
            <ul>
                {/* Render each category as a list item and add an onClick listener to each one */}
                {categories.map((category) => (
                    <li onClick={chooseCategory} key={category}>{category}</li>
                ))}
            </ul>
        </aside>
    );
}