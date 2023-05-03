
export default function ShopAside(props) {

    const category = ['All','Desktop', 'Laptop', 'Game'];

    function chooseCategory(event) {
        let choosenCategory = event.target.textContent.toLowerCase();
        props.setCategory(choosenCategory);
    }

    return (
        <aside id="shopAside">
            <ul>
                {category.map((item) => (
                    <li onClick={chooseCategory} key={item}>{item}</li>
                ))}
            </ul>
        </aside>
    );

}