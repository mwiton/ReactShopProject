import { ShopActionTypes } from "./shop.types";

export const changeCartVisibility = () => ({
    type: ShopActionTypes.CHANGE_VISIBILITY_CART
});

export const addCartItem = (item) => ({
    type: ShopActionTypes.ADD_CART_ITEM,
    payload: item
});