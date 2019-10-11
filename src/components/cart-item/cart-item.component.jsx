import React from 'react';
import './cart-item.styles.scss'

const CartItem = ({item}) => (
    <div className='cart-item'>
        <img src={item.imageUrl} alt='item'/>
        <span className='item-details'>{item.name} {item.count} x ${item.price}</span>
    </div>
);

export default CartItem;
