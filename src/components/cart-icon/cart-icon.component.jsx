import React from 'react';
import { ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import './cart-icon.styles.scss'
import {changeCartVisibility} from "../../redux/shop/shop.actions";
import {connect} from "react-redux";

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
    cartSize: state.shop.cartItems.reduce((accumulator, item) => (
        accumulator + item.count
    ), 0)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
