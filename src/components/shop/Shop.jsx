import { useState } from 'react';
import '../../css/shop/Shop.css';

import ShopArticle from './shoparticle/ShopArticle';
import ShopAside from './shopaside/ShopAside';


export default function Shop(props) {

    const [category, setCategory] = useState('all');

    return (
        <div id="shop">
            <main id='shopMain'>
                <ShopAside setCategory={setCategory}/>
                <ShopArticle {...props} category={category} />
            </main>
        </div>
    );
}