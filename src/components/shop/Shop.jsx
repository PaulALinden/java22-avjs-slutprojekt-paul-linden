import React from 'react';
import '../../css/shop/Shop.css';

import ShopArticle from './shoparticle/ShopArticle';
import ShopAside from './shopaside/ShopAside';

export default function Shop(props) {

    return (
        <div id="shop">
            <main id='shopMain'>
                <ShopAside />
                <ShopArticle {...props} />
            </main>
        </div>
    );
}