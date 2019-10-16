import React from 'react';
import './cart-dropdown.styles.scss'
import CustomButton from "../custom-button/custom-button.component";
import {connect} from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import {cartItemsSelector} from "../../redux/shop/shop.selectors";
import {changeCartVisibility} from "../../redux/shop/shop.actions";
import { withRouter } from 'react-router-dom';

const CartDropdown = ({cartItems, changeCartVisibility, history}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length
                ?
                    cartItems.map(item => (
                        <CartItem key={item.id} item={item}/>
                    ))
                :
                    <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {
            changeCartVisibility();
            history.push('/checkout');
        }} >GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = state => ({
    cartItems: cartItemsSelector(state)
});

const mapDispatchToProps = dispatch => ({
    changeCartVisibility: () => dispatch(changeCartVisibility())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
