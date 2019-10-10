import { ShopActionTypes } from "./shop.types";

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
        let itemIndex = state.cartItems.findIndex(({name}) => (name === action.payload.name));
        if (itemIndex !== -1) {
            state.cartItems[itemIndex].count += 1;
        }
        else {
            state.cartItems.push({
                ...action.payload,
                count: 1
            });
        }
    }
    return state;
};

export default shopReducer;
