
export default function ShopAside() {

    const category = ['Desktops', 'Laptops', 'Games'];

    return (
        <aside id="shopAside">
            <ul>
                {category.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </aside>
    );

}