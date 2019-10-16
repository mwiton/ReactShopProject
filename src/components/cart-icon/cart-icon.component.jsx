import React from 'react';
import { ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import './cart-icon.styles.scss'
import {changeCartVisibility} from "../../redux/shop/shop.actions";
import {connect} from "react-redux";
import {cartSizeSelector} from "../../redux/shop/shop.selectors";

const CartIcon = ({changeCartVisibility, cartSize}) => (
    <div onClick={changeCartVisibility} className='cart-icon'>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{cartSize}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    changeCartVisibility: () => dispatch(changeCartVisibility())
});

const mapStateToProps = state => ({
    cartSize: cartSizeSelector(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
