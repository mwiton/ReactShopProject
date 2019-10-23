import { ShopActionTypes } from "./shop.types";
import {addItemToCart, changeCartItemCount, deleteItemFromCart} from "./shop.utils";

const INITIAL_STATE = {
    cartVisible: false,
    cartItems: []
};

const shopReducer = (state = INITIAL_STATE, action) => {
    if (action.type === ShopActionTypes.CHANGE_VISIBILITY_CART) {
        return {
            ...state,
            cartVisible: !state.cartVisible
        };
    }
    else if (action.type === ShopActionTypes.ADD_CART_ITEM) {
        return {
            ...state,
            cartItems: addItemToCart(state.cartItems, action.payload)
        }
    }
    else if (action.type === ShopActionTypes.DELETE_CART_ITEM) {
        return {
            ...state,
            cartItems: deleteItemFromCart(state.cartItems, action.payload)
        }
    }
    else if (action.type === ShopActionTypes.INCREASE_COUNT) {
        return {
            ...state,
            cartItems: changeCartItemCount(state.cartItems, action.payload, 1)
        }
    }
    else if (action.type === ShopActionTypes.DECREASE_COUNT) {
        return {
            ...state,
            cartItems: changeCartItemCount(state.cartItems, action.payload, -1)
        }
    }
    return state;
};

export default shopReducer;
