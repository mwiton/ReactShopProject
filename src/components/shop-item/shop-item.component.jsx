import React from 'react';

import './shop-item.styles.scss'

const ShopItem = ({name, price, imageUrl}) => (
    <div className='collection-item'>
        <div className='image' style={{
            backgroundImage: `url(${imageUrl})`
        }}>
            <button>Add to cart</button>
        </div>
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
    </div>
);


export default ShopItem;