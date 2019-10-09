import React from 'react';

import './shop-item.styles.scss'
import CustomButton from "../custom-button/custom-button.component";

const ShopItem = ({name, price, imageUrl}) => (
    <div className='collection-item'>
        <div className='image' style={{
            backgroundImage: `url(${imageUrl})`
        }}>
            <CustomButton>Add to cart</CustomButton>
        </div>
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
    </div>
);


export default ShopItem;