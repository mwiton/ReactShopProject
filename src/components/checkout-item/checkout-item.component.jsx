import React from 'react';
import './checkout-item.styles.scss'
import {connect} from "react-redux";
import {decreaseCartItemCount, deleteCartItem, increaseCartItemCount} from "../../redux/shop/shop.actions";

const CheckoutItem = ({item, deleteCartItem,
                       increaseItemCount, decreaseItemCount}) => (
   <div className='checkout-item'>
        <div className='image-container'>
            <img src={item.imageUrl} alt='item'/>
        </div>
        <span className='name'>{item.name}</span>
        <div className='quantity'>
            <span className='arrow-button' onClick={() => decreaseItemCount(item)}>&#10094;</span>
            <span> {item.count} </span>
            <span className='arrow-button' onClick={() => increaseItemCount(item)}>&#10095;</span>
        </div>
        <span className='price'>{item.price * item.count}</span>
        <div className='remove-button' onClick={() => deleteCartItem(item)}>&#10005;</div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    deleteCartItem: (item) => dispatch(deleteCartItem(item)),
    increaseItemCount: (item) => dispatch(increaseCartItemCount(item)),
    decreaseItemCount: (item) => dispatch(decreaseCartItemCount(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
