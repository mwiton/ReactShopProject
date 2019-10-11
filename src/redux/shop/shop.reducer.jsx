import { ShopActionTypes } from "./shop.types";
import {addItemToCart} from "./shop.utils";

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
    return state;
};

export default shopReducer;
