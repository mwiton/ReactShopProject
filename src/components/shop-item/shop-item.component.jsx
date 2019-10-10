import React from 'react';

import './shop-item.styles.scss'
import CustomButton from "../custom-button/custom-button.component";
import {connect} from "react-redux";
import {addCartItem} from "../../redux/shop/shop.actions";

const ShopItem = ({item, addCartItem}) => (
    <div className='collection-item'>
        <div className='image' style={{
            backgroundImage: `url(${item.imageUrl})`
        }}>
        </div>
        <div className='collection-footer'>
            <span className='name'>{item.name}</span>
            <span className='price'>{item.price}</span>
        </div>
        <CustomButton onClick={() => addCartItem(item)} customClass={'inverted'}>Add to cart</CustomButton>
    </div>
);

const mapDispatchToProps = dispatch => ({
    addCartItem: (item) => dispatch(addCartItem(item))
});

export default connect(null, mapDispatchToProps)(ShopItem);