import { ShopActionTypes } from "./shop.types";

const INITIAL_STATE = {
    cartVisible: false
};

const shopReducer = (state = INITIAL_STATE, action) => {
    if (action.type === ShopActionTypes.CHANGE_VISIBILITY_CART) {
        return {
            ...state,
            cartVisible: !state.cartVisible
        };
    }
    return state;
};

export default shopReducer;
