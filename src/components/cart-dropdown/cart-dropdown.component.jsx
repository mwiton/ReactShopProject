import React from 'react';
import './cart-dropdown.styles.scss'
import CustomButton from "../custom-button/custom-button.component";
import {connect} from "react-redux";

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(item => (
                    <span>{item.name} {item.count}</span>
                ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = state => ({
    cartItems: state.shop.cartItems
});

export default connect(mapStateToProps)(CartDropdown);
