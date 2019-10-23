import { ShopActionTypes } from "./shop.types";

export const changeCartVisibility = () => ({
    type: ShopActionTypes.CHANGE_VISIBILITY_CART
});

export const addCartItem = (item) => ({
    type: ShopActionTypes.ADD_CART_ITEM,
    payload: item
});

export const deleteCartItem = (item) => ({
    type: ShopActionTypes.DELETE_CART_ITEM,
    payload: item
});

export const increaseCartItemCount = (item) => ({
    type: ShopActionTypes.INCREASE_COUNT,
    payload: item
});

export const decreaseCartItemCount = (item) => ({
    type: ShopActionTypes.DECREASE_COUNT,
    payload: item
});