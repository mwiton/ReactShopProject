import React from 'react';
import './cart-dropdown.styles.scss'
import CustomButton from "../custom-button/custom-button.component";
import {connect} from "react-redux";

const CartDropdown = ({isVisible}) => (
    <div className='cart-dropdown'>
        <div className={'cart-items'} />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = state => ({
    isVisible: state.shop.cartVisible
});

export default connect(mapStateToProps)(CartDropdown);
