import React from 'react';
import './checkout.styles.scss'
import {cartItemsSelector, totalPriceSelector} from "../../redux/shop/shop.selectors";
import {connect} from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = ({cartItems, totalPrice}) => (
    <div key='Checkout' className='checkout'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(item => {
                console.log('Map item: ' + item.count);
                return (
                    <CheckoutItem key={item.id} item={item}/>
                );
            })
        }
        <span className='total'>Total: {totalPrice}</span>
    </div>
);

const mapStateToProps = state => ({
    cartItems: cartItemsSelector(state),
    totalPrice: totalPriceSelector(state)
});

export default connect(mapStateToProps)(CheckoutPage);
